import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { z } from "zod";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, "../data");
const componentsDataDir = path.join(dataDir, "components");
const cssConventionDefaultSource = "mcp-server/data/css-convention.md";
const packageJsonPath = path.resolve(__dirname, "../../package.json");

const packageVersion = (() => {
  if (!fs.existsSync(packageJsonPath)) {
    return "0.0.0";
  }

  try {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    return String(pkg.version || "0.0.0");
  } catch {
    return "0.0.0";
  }
})();

const host = process.env.MCP_HOST || "127.0.0.1";
const port = Number.parseInt(process.env.MCP_PORT || "3333", 10);

// ---------------------------------------------------------------------------
// Load pre-built index
// ---------------------------------------------------------------------------

const indexPath = path.join(dataDir, "index.json");

if (!fs.existsSync(indexPath)) {
  process.stderr.write(
    "[mcp-http] data/index.json not found. Run `npm run mcp:build` first.\n",
  );
  process.exit(1);
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function loadComponentDetail(name) {
  const target = normalizeName(name);
  const component = index.components.find(
    c => normalizeName(c.name) === target,
  );
  if (!component) {
    return null;
  }

  const detailPath = path.join(componentsDataDir, `${component.name}.json`);
  if (!fs.existsSync(detailPath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(detailPath, "utf-8"));
}

function loadCssConvention() {
  const source = index.cssConvention?.source || cssConventionDefaultSource;
  const candidateSources = [
    source,
    cssConventionDefaultSource,
    "mcp-server/data/convention.md",
  ];

  const match = candidateSources.find(candidate => {
    const candidatePath = path.resolve(__dirname, "../..", candidate);
    return fs.existsSync(candidatePath);
  });

  if (!match) {
    return {
      source,
      error: `CSS convention file not found. Tried: ${candidateSources.join(", ")}`,
    };
  }

  const absolutePath = path.resolve(__dirname, "../..", match);

  return {
    source: match,
    markdown: fs.readFileSync(absolutePath, "utf-8").trim(),
  };
}

function jsonContent(data) {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data, null, 2),
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// MCP server factory
// ---------------------------------------------------------------------------

function createMcpServer() {
  const mcpServer = new McpServer(
    {
      name: "bimdata-design-system-http",
      version: packageVersion,
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  mcpServer.registerTool(
    "list_components",
    {
      description:
        "List all documented components from src/web/views/Components.",
    },
    async () => jsonContent(index.components),
  );

  mcpServer.registerTool(
    "search_components",
    {
      description: "Search components by name or description.",
      inputSchema: {
        query: z.string(),
      },
    },
    async ({ query }) => {
      const q = String(query || "")
        .trim()
        .toLowerCase();
      const results = index.components.filter(component => {
        const haystack =
          `${component.name} ${component.title || ""} ${component.description || ""}`.toLowerCase();
        return haystack.includes(q);
      });
      return jsonContent(results);
    },
  );

  mcpServer.registerTool(
    "get_component_detail",
    {
      description: "Get component detail with example, props, and slots.",
      inputSchema: {
        name: z.string(),
      },
    },
    ({ name }) => {
      const detail = loadComponentDetail(name);
      if (!detail) {
        return jsonContent({ error: `Unknown component: ${name}` });
      }
      return jsonContent(detail);
    },
  );

  mcpServer.registerTool(
    "search_icons",
    {
      description:
        "List or search available icons by name. Pass an optional query to filter; omit it to list all icons.",
      inputSchema: {
        query: z.string().optional(),
      },
    },
    ({ query }) => {
      const q = String(query || "")
        .trim()
        .toLowerCase();
      const results = q
        ? index.icons.filter(icon => icon.name.toLowerCase().includes(q))
        : index.icons;
      return jsonContent(results);
    },
  );

  mcpServer.registerTool(
    "css_convention",
    {
      description:
        "Get all CSS conventions (spacing, box shadow, and colors) from convention.md.",
    },
    async () => jsonContent(loadCssConvention()),
  );

  return mcpServer;
}

// ---------------------------------------------------------------------------
// HTTP server
// ---------------------------------------------------------------------------

const httpServer = http.createServer(async (req, res) => {
  if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ ok: true, name: "bimdata-design-system-http-mcp" }),
    );
    return;
  }

  if (req.url !== "/mcp") {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  if (req.method !== "POST" && req.method !== "GET") {
    res.writeHead(405, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let parsedBody;
  if (req.method === "POST") {
    const bodyChunks = [];
    for await (const chunk of req) {
      bodyChunks.push(chunk);
    }

    if (bodyChunks.length > 0) {
      const rawBody = Buffer.concat(bodyChunks).toString("utf-8");
      try {
        parsedBody = JSON.parse(rawBody);
      } catch {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            jsonrpc: "2.0",
            error: { code: -32700, message: "Parse error: invalid JSON body" },
            id: null,
          }),
        );
        return;
      }
    }
  }

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });
  const mcpServer = createMcpServer();

  try {
    await mcpServer.connect(transport);
    await transport.handleRequest(req, res, parsedBody);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";
    if (!res.headersSent) {
      res.writeHead(500, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: message }));
    }
  } finally {
    await mcpServer.close();
  }
});

httpServer.listen(port, host, () => {
  process.stdout.write(
    `[mcp-http] listening on http://${host}:${port}/mcp\n[mcp-http] health check: http://${host}:${port}/health\n`,
  );
});
