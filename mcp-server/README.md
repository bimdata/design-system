# BIMData Design System MCP Server

This MCP server exposes BIMData design-system components from `src/BIMDataComponents`.

## Available tools

- `list_components`: list all public components exported by `src/BIMDataComponents/index.js`
- `search_components`: search by component name, props, emits, slots, and relationships
- `get_component_details`: get props, emits, slots, and dependencies for one component
- `get_component_source`: return `full`, `template`, `script`, or `style` source
- `find_components_by_feature`: filter components by prop/event/slot/used component
- `list_design_tokens`: list color tokens, icon color tokens, and CSS variables
- `search_design_tokens`: search tokens by name or value
- `list_css_classes`: list utility CSS classes with file paths
- `search_css_classes`: search utility classes by class name or source file
- `list_icons`: list icon metadata for library and standalone icon sets
- `search_icons`: search icons by name/path with optional type filter
- `get_icon_details`: get exact icon matches by name
- `refresh_component_index`: rebuild components/tokens/classes/icons in memory

## Install

From the repository root:

- `npm install`

## Run

- `npm run mcp:start`

The server uses stdio transport.

When started from a terminal, it waits for an MCP client connection and keeps running.

## Smoke test

- `npm run mcp:smoke`

This validates indexing and basic list/search/detail behavior.
