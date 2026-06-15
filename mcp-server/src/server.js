import path from "node:path";
import { fileURLToPath } from "node:url";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { ComponentIndex } from "./component-index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../..");

const componentIndex = new ComponentIndex({ rootDir: projectRoot });
await componentIndex.build();

function createProtocolServer() {
  const protocolServer = new Server(
    {
      name: "bimdata-design-system-mcp",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  protocolServer.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: "list_components",
        description:
          "List public BIMData components exported by src/BIMDataComponents/index.js",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "search_components",
        description:
          "Search components by name, props, emits, slots, path, tags, and used components",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "get_component_details",
        description:
          "Get detailed metadata for one component: props, emits, slots, dependencies, and reverse dependencies",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Component export name, for example BIMDataTable",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "get_component_source",
        description: "Get component source as full/template/script/style",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Component export name",
            },
            section: {
              type: "string",
              enum: ["full", "template", "script", "style"],
              description: "Source section to return",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "find_components_by_feature",
        description:
          "Filter components by prop, event, slot, or used component dependency",
        inputSchema: {
          type: "object",
          properties: {
            prop: {
              type: "string",
              description: "Substring match against prop names",
            },
            event: {
              type: "string",
              description: "Substring match against emitted event names",
            },
            slot: {
              type: "string",
              description: "Substring match against slot names",
            },
            usesComponent: {
              type: "string",
              description: "Substring match against used component names",
            },
          },
        },
      },
      {
        name: "list_design_tokens",
        description:
          "List design tokens including colors, icon colors, and CSS variables",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "search_design_tokens",
        description: "Search design tokens by name or value",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "list_css_classes",
        description: "List utility CSS classes with their source files",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "search_css_classes",
        description: "Search utility CSS classes by class name or file path",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "list_icons",
        description:
          "List icon metadata from library and standalone icon sources",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "search_icons",
        description:
          "Search icons by name, file, or path, optionally filtered by type",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query",
            },
            type: {
              type: "string",
              enum: ["library", "standalone"],
              description: "Optional icon source type",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "get_icon_details",
        description:
          "Get exact icon entries by icon name, optionally filtered by type",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Icon name, for example Close or AddFile",
            },
            type: {
              type: "string",
              enum: ["library", "standalone"],
              description: "Optional icon source type",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "refresh_component_index",
        description:
          "Rebuild components, tokens, css classes, and icon metadata",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  }));

  protocolServer.setRequestHandler(CallToolRequestSchema, async request => {
    const { name, arguments: args = {} } = request.params;

    try {
      if (name === "list_components") {
        return asTextResult(componentIndex.list(args));
      }

      if (name === "search_components") {
        return asTextResult(componentIndex.search(args));
      }

      if (name === "get_component_details") {
        const details = componentIndex.details(args.name);
        return details
          ? asTextResult(details)
          : asError(`Unknown component: ${args.name}`);
      }

      if (name === "get_component_source") {
        const source = componentIndex.source(args.name, {
          section: args.section ?? "full",
        });
        return source
          ? asTextResult(source)
          : asError(`Unknown component: ${args.name}`);
      }

      if (name === "find_components_by_feature") {
        return asTextResult(componentIndex.byFeature(args));
      }

      if (name === "list_design_tokens") {
        return asTextResult(componentIndex.listTokens());
      }

      if (name === "search_design_tokens") {
        return asTextResult(componentIndex.searchTokens(args));
      }

      if (name === "list_css_classes") {
        return asTextResult(componentIndex.listCssClasses());
      }

      if (name === "search_css_classes") {
        return asTextResult(componentIndex.searchCssClasses(args));
      }

      if (name === "list_icons") {
        return asTextResult(componentIndex.listIcons());
      }

      if (name === "search_icons") {
        return asTextResult(componentIndex.searchIcons(args));
      }

      if (name === "get_icon_details") {
        const details = componentIndex.iconDetails(args);
        return details
          ? asTextResult(details)
          : asError("Missing required icon name");
      }

      if (name === "refresh_component_index") {
        return asTextResult(await componentIndex.build());
      }

      return asError(`Unknown tool: ${name}`);
    } catch (error) {
      return asError(error instanceof Error ? error.message : String(error));
    }
  });

  return protocolServer;
}

function asTextResult(payload) {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(payload, null, 2),
      },
    ],
  };
}

function asError(message) {
  return asTextResult({ error: message });
}

const host = process.env.MCP_HOST ?? "127.0.0.1";
const port = Number(process.env.MCP_PORT ?? 3333);

const app = createMcpExpressApp({ host });

app.all("/mcp", async (req, res) => {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });
  const protocolServer = createProtocolServer();

  res.on("close", () => {
    transport.close().catch(() => {});
    protocolServer.close().catch(() => {});
  });

  try {
    await protocolServer.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error("MCP HTTP request failed", {
      method: req.method,
      url: req.originalUrl,
      contentType: req.headers["content-type"],
      accept: req.headers.accept,
      error:
        error instanceof Error ? (error.stack ?? error.message) : String(error),
    });

    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: error instanceof Error ? error.message : String(error),
        },
        id: null,
      });
    }
  }
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, host, () => {
  console.log(`MCP server listening on http://${host}:${port}/mcp`);
});
