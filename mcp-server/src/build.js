import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "../..");
const dataDir = path.resolve(__dirname, "../data");
const componentsDataDir = path.join(dataDir, "components");
const conventionFilePath = path.join(dataDir, "css-convention.md");

const componentsRoot = path.join(repoRoot, "src/web/views/Components");
const storeFilePath = path.join(repoRoot, "src/web/store.js");

// ---------------------------------------------------------------------------
// File system helpers
// ---------------------------------------------------------------------------

function toPosixRelative(absolutePath) {
  return path.relative(repoRoot, absolutePath).split(path.sep).join("/");
}

function walkFiles(rootDir) {
  if (!fs.existsSync(rootDir)) {
    return [];
  }

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(entryPath));
      continue;
    }
    if (entry.isFile()) {
      files.push(entryPath);
    }
  }

  return files;
}

function listTopLevelDirs(rootDir) {
  if (!fs.existsSync(rootDir)) {
    return [];
  }

  return fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------

function stripTags(text) {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function normalizeSnippet(text) {
  return decodeHtmlEntities(text)
    .replace(/\r\n/g, "\n")
    .replace(/^[\t ]+/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ---------------------------------------------------------------------------
// Vue file extractors
// ---------------------------------------------------------------------------

function extractFirstHeading(vueFilePath) {
  if (!fs.existsSync(vueFilePath)) {
    return null;
  }

  const content = fs.readFileSync(vueFilePath, "utf-8");
  const match = content.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/i);
  if (!match) {
    return null;
  }

  return match[1]
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractDescription(vueFilePath) {
  if (!fs.existsSync(vueFilePath)) {
    return null;
  }

  const content = fs.readFileSync(vueFilePath, "utf-8");
  const textBlockRegex = /<BIMDataText([^>]*)>([\s\S]*?)<\/BIMDataText>/g;
  let match = textBlockRegex.exec(content);

  while (match) {
    const attrs = match[1] || "";
    const body = stripTags(match[2] || "");
    const isHeading = /component\s*=\s*"h1"/.test(attrs);
    const hasTemplateInterpolation = /\{\{[^}]+\}\}/.test(body);

    if (!isHeading && !hasTemplateInterpolation && body.length >= 20) {
      return body;
    }

    match = textBlockRegex.exec(content);
  }

  return null;
}

function extractTemplateSlotContent(content, slotName) {
  const slotRegex = new RegExp(
    `<template\\s+#${slotName}[^>]*>([\\s\\S]*?)<\\/template>`,
    "i",
  );
  return content.match(slotRegex)?.[1]?.trim() || null;
}

function extractMethodSource(content, methodName) {
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  const scriptContent = scriptMatch?.[1] || content;
  const methodPattern = new RegExp(`${methodName}\\s*\\([^)]*\\)\\s*\\{`);
  const methodMatch = methodPattern.exec(scriptContent);

  if (!methodMatch) {
    return null;
  }

  const bodyStart = scriptContent.indexOf("{", methodMatch.index);
  if (bodyStart === -1) {
    return null;
  }

  let depth = 0;
  for (let index = bodyStart; index < scriptContent.length; index += 1) {
    const char = scriptContent[index];
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return scriptContent.slice(methodMatch.index, index + 1).trim();
      }
    }
  }

  return null;
}

function extractRepresentativeImportSnippet(methodSource) {
  if (!methodSource) {
    return null;
  }

  const templateLiteralMatch = methodSource.match(/return\s*`([\s\S]*?)`\s*;?/);
  if (!templateLiteralMatch) {
    return null;
  }

  const rawTemplate = templateLiteralMatch[1].replace(/\$\{[\s\S]*?\}/g, "");
  return normalizeSnippet(rawTemplate);
}

function extractExample(vueFilePath) {
  if (!fs.existsSync(vueFilePath)) {
    return null;
  }

  const content = fs.readFileSync(vueFilePath, "utf-8");
  const importTemplate = extractTemplateSlotContent(content, "import");
  let importSnippet = null;

  if (importTemplate) {
    const dynamicMethodMatch = importTemplate.match(
      /\{\{\s*([A-Za-z0-9_]+)\(\)\s*\}\}/,
    );
    if (dynamicMethodMatch) {
      importSnippet = extractRepresentativeImportSnippet(
        extractMethodSource(content, dynamicMethodMatch[1]),
      );
    } else {
      importSnippet = normalizeSnippet(importTemplate.replace(/<[^>]+>/g, ""));
    }
  }

  const codeTemplate = extractTemplateSlotContent(content, "code");
  let codeSnippet = null;
  if (codeTemplate) {
    const preMatch = codeTemplate.match(/<pre>([\s\S]*?)<\/pre>/i);
    codeSnippet = normalizeSnippet(preMatch?.[1] || codeTemplate);
  }

  const exampleSnippet = [importSnippet, codeSnippet]
    .filter(Boolean)
    .join("\n\n");
  return exampleSnippet || null;
}

// ---------------------------------------------------------------------------
// Props / slots helpers
// ---------------------------------------------------------------------------

async function tryLoadDefaultArray(absoluteFilePath) {
  if (!fs.existsSync(absoluteFilePath)) {
    return [];
  }

  try {
    const moduleUrl = `${pathToFileURL(absoluteFilePath).href}?v=${Date.now()}`;
    const mod = await import(moduleUrl);
    if (Array.isArray(mod.default)) {
      return mod.default;
    }
  } catch {
    // Keep build resilient if one data file cannot be imported.
  }

  return [];
}

function normalizeTableHeader(header) {
  return header === "Props" ? "Prop" : header;
}

function normalizeRequiredValue(value) {
  if (typeof value === "boolean") {
    return value;
  }

  const normalized = String(value || "")
    .trim()
    .toLowerCase();

  if (!normalized) {
    return false;
  }

  return normalized === "true";
}

function formatTableData(table) {
  if (!Array.isArray(table) || table.length === 0) {
    return [];
  }

  const [headerRow, ...rows] = table;
  if (!Array.isArray(headerRow) || headerRow.length === 0) {
    return [];
  }

  const headers = headerRow.map(h => normalizeTableHeader(String(h)));

  return rows
    .filter(row => Array.isArray(row))
    .map(row => {
      const entry = {};
      headers.forEach((header, index) => {
        if (header === "Required") {
          entry[header] = normalizeRequiredValue(row[index]);
          return;
        }

        entry[header] = row[index] ?? "";
      });
      return entry;
    });
}

// ---------------------------------------------------------------------------
// Store description map
// ---------------------------------------------------------------------------

function normalizeLookupKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function maybeSingularize(value) {
  return value.endsWith("s") ? value.slice(0, -1) : value;
}

function getLookupAliases(...values) {
  const aliases = new Set();

  values.forEach(value => {
    const normalized = normalizeLookupKey(value);
    if (!normalized) return;
    aliases.add(normalized);
    const singular = maybeSingularize(normalized);
    if (singular) aliases.add(singular);
  });

  return [...aliases];
}

function buildStoreComponentDescriptionMap() {
  if (!fs.existsSync(storeFilePath)) {
    return new Map();
  }

  const storeContent = fs.readFileSync(storeFilePath, "utf-8");
  const marker = "Components:";
  const markerIndex = storeContent.indexOf(marker);
  const componentsBlock =
    markerIndex === -1 ? "" : storeContent.slice(markerIndex);
  const childRegex =
    /title:\s*"([^"]+)"[\s\S]*?path:\s*"([^"]+)"[\s\S]*?text:\s*"([^"]*)"/g;
  const descriptionMap = new Map();

  let match = childRegex.exec(componentsBlock);
  while (match) {
    const [, title, routePath, description] = match;
    for (const alias of getLookupAliases(title, routePath)) {
      if (description && !descriptionMap.has(alias)) {
        descriptionMap.set(alias, description);
      }
    }
    match = childRegex.exec(componentsBlock);
  }

  return descriptionMap;
}

// ---------------------------------------------------------------------------
// Index builders
// ---------------------------------------------------------------------------

function buildComponentsIndex() {
  const descriptionMap = buildStoreComponentDescriptionMap();

  return listTopLevelDirs(componentsRoot).map(componentName => {
    const componentDir = path.join(componentsRoot, componentName);
    const files = walkFiles(componentDir)
      .filter(filePath => /\.(vue|js|css|scss)$/i.test(filePath))
      .map(filePath => toPosixRelative(filePath))
      .sort((a, b) => a.localeCompare(b));

    const primaryVue = path.join(componentDir, `${componentName}.vue`);
    const descriptionFromStore = getLookupAliases(componentName).reduce(
      (result, alias) => result || descriptionMap.get(alias) || null,
      null,
    );

    return {
      name: componentName,
      _dir: componentDir,
      description: descriptionFromStore || extractDescription(primaryVue),
    };
  });
}

function buildCssConvention() {
  return {
    source: toPosixRelative(conventionFilePath),
  };
}

// ---------------------------------------------------------------------------
// Component detail builder
// ---------------------------------------------------------------------------

async function buildComponentDetail(component) {
  const componentDir = component._dir;
  const primaryVuePath = path.join(componentDir, `${component.name}.vue`);
  const propsFiles = walkFiles(componentDir).filter(filePath =>
    /props.*\.js$/i.test(filePath),
  );
  const slotsFiles = walkFiles(componentDir).filter(filePath =>
    /slots.*\.js$/i.test(filePath),
  );

  const props = [];
  for (const propsFilePath of propsFiles) {
    const table = await tryLoadDefaultArray(propsFilePath);
    props.push({
      source: toPosixRelative(propsFilePath),
      table: formatTableData(table),
    });
  }

  const slots = [];
  for (const slotsFilePath of slotsFiles) {
    const table = await tryLoadDefaultArray(slotsFilePath);
    slots.push({
      source: toPosixRelative(slotsFilePath),
      table: formatTableData(table),
    });
  }

  return {
    name: component.name,
    description: component.description,
    example: extractExample(primaryVuePath),
    props,
    slots,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  fs.mkdirSync(componentsDataDir, { recursive: true });

  const components = buildComponentsIndex();
  const cssConvention = buildCssConvention();

  const index = {
    generatedAt: new Date().toISOString(),
    components: components.map(({ _dir, ...rest }) => rest),
    cssConvention,
  };

  fs.writeFileSync(
    path.join(dataDir, "index.json"),
    JSON.stringify(index, null, 2) + "\n",
  );

  for (const component of components) {
    const detail = await buildComponentDetail(component);
    fs.writeFileSync(
      path.join(componentsDataDir, `${component.name}.json`),
      JSON.stringify(detail, null, 2) + "\n",
    );
  }

  process.stdout.write(
    `[mcp-build] done — ${components.length} components, CSS convention loaded\n`,
  );
}

main().catch(err => {
  process.stderr.write(`[mcp-build] error: ${err.stack || err.message}\n`);
  process.exitCode = 1;
});
