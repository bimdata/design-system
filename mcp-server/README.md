# BIMData Design System MCP Server

This MCP server exposes documentation indexes from this repository over HTTP streamable MCP transport.

## Exposed sources

- Components: src/web/views/Components
- CSS conventions: mcp-server/data/css-convention.md

## Start server

From repository root:

```bash
npm run mcp:start
```

Server endpoints:

- MCP endpoint: http://127.0.0.1:3333/mcp
- Health check: http://127.0.0.1:3333/health

Use `MCP_HOST` and `MCP_PORT` environment variables to override defaults.

## Available tools

- list_components
- search_components
- get_component_detail
- css_convention

## Development

```bash
npm run mcp:dev
npm run mcp:smoke
```
