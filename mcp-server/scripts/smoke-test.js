import { spawn, execFileSync } from "node:child_process";

const host = process.env.MCP_HOST || "127.0.0.1";
const port = Number.parseInt(process.env.MCP_PORT || "3341", 10);
const baseUrl = `http://${host}:${port}`;
const mcpUrl = `${baseUrl}/mcp`;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function postJson(payload) {
  const response = await fetch(mcpUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json, text/event-stream",
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  return {
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    text,
  };
}

async function waitForServerReady(maxRetries = 40, intervalMs = 250) {
  for (let i = 0; i < maxRetries; i += 1) {
    try {
      const response = await fetch(`${baseUrl}/health`);
      if (response.ok) {
        return true;
      }
    } catch {
      // no-op
    }
    await delay(intervalMs);
  }

  return false;
}

async function run() {
  process.stdout.write("[smoke] running mcp:build...\n");
  execFileSync("node", ["mcp-server/src/build.js"], { stdio: "inherit" });

  const serverProcess = spawn("node", ["mcp-server/src/server.js"], {
    stdio: ["ignore", "pipe", "pipe"],
    env: {
      ...process.env,
      MCP_HOST: host,
      MCP_PORT: String(port),
    },
  });

  serverProcess.stdout.on("data", chunk => {
    process.stdout.write(`[server] ${chunk}`);
  });
  serverProcess.stderr.on("data", chunk => {
    process.stderr.write(`[server:error] ${chunk}`);
  });

  const ready = await waitForServerReady();
  if (!ready) {
    serverProcess.kill("SIGTERM");
    throw new Error("MCP server did not become ready in time");
  }

  const initialize = await postJson({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2025-03-26",
      capabilities: {},
      clientInfo: { name: "smoke-test", version: "1.0.0" },
    },
  });

  const toolList = await postJson({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/list",
    params: {},
  });

  const searchComponents = await postJson({
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: { name: "search_components", arguments: { query: "button" } },
  });

  const componentDetail = await postJson({
    jsonrpc: "2.0",
    id: 4,
    method: "tools/call",
    params: { name: "get_component_detail", arguments: { name: "Buttons" } },
  });

  const cssConvention = await postJson({
    jsonrpc: "2.0",
    id: 5,
    method: "tools/call",
    params: { name: "css_convention", arguments: {} },
  });

  const malformed = await postJson({
    jsonrpc: "2.0",
    id: 6,
    method: "tools/call",
    params: {},
  });

  process.stdout.write("\n--- initialize ---\n");
  process.stdout.write(`${initialize.text}\n`);

  process.stdout.write("\n--- tools/list ---\n");
  process.stdout.write(`${toolList.text}\n`);

  process.stdout.write("\n--- tools/call search_components ---\n");
  process.stdout.write(`${searchComponents.text}\n`);

  process.stdout.write("\n--- tools/call get_component_detail ---\n");
  process.stdout.write(`${componentDetail.text}\n`);

  process.stdout.write("\n--- tools/call css_convention ---\n");
  process.stdout.write(`${cssConvention.text}\n`);

  process.stdout.write("\n--- malformed tools/call ---\n");
  process.stdout.write(`${malformed.text}\n`);

  serverProcess.kill("SIGTERM");

  if (toolList.status !== 200 || !toolList.text.includes("list_components")) {
    throw new Error(
      "Smoke test failed: tools/list did not include list_components",
    );
  }

  if (toolList.text.includes("refresh_index")) {
    throw new Error("Smoke test failed: refresh_index should not be exposed");
  }

  if (toolList.text.includes("server_summary")) {
    throw new Error("Smoke test failed: server_summary should not be exposed");
  }

  if (!toolList.text.includes("search_components")) {
    throw new Error(
      "Smoke test failed: tools/list did not include search_components",
    );
  }

  if (!toolList.text.includes("get_component_detail")) {
    throw new Error(
      "Smoke test failed: tools/list did not include get_component_detail",
    );
  }

  if (!toolList.text.includes("css_convention")) {
    throw new Error(
      "Smoke test failed: tools/list did not include css_convention",
    );
  }

  if (toolList.text.includes("list_guidelines")) {
    throw new Error("Smoke test failed: list_guidelines should not be exposed");
  }

  if (toolList.text.includes("list_css_classes")) {
    throw new Error(
      "Smoke test failed: list_css_classes should not be exposed",
    );
  }

  if (toolList.text.includes("guideline_colors")) {
    throw new Error(
      "Smoke test failed: guideline_colors should not be exposed",
    );
  }

  if (toolList.text.includes("guideline_spacing")) {
    throw new Error(
      "Smoke test failed: guideline_spacing should not be exposed",
    );
  }

  if (toolList.text.includes("guideline_")) {
    throw new Error("Smoke test failed: no guideline_* tool should be exposed");
  }

  if (
    searchComponents.status !== 200 ||
    !searchComponents.text.includes("Buttons")
  ) {
    throw new Error(
      "Smoke test failed: search_components did not return Buttons",
    );
  }

  if (
    componentDetail.status !== 200 ||
    !componentDetail.text.includes("props")
  ) {
    throw new Error(
      "Smoke test failed: get_component_detail did not return props data",
    );
  }

  if (!componentDetail.text.includes("BIMDataButton")) {
    throw new Error(
      "Smoke test failed: get_component_detail did not return an example with BIMDataButton",
    );
  }

  if (
    cssConvention.status !== 200 ||
    !cssConvention.text.includes("Color Convention")
  ) {
    throw new Error(
      "Smoke test failed: css_convention did not return expected content",
    );
  }

  process.stdout.write("\nSmoke test passed\n");
}

run().catch(error => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
