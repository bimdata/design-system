import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_COMPONENTS_DIR = "src/BIMDataComponents";
const DEFAULT_EXPORTS_FILE = "src/BIMDataComponents/index.js";
const DEFAULT_COLORS_FILE = "src/assets/colors.js";
const DEFAULT_ICONS_COLORS_FILE = "src/assets/iconsColors.js";
const DEFAULT_VARIABLES_FILE = "src/assets/css/variables.css";
const DEFAULT_UTILITIES_DIR = "src/assets/css/utilities";
const DEFAULT_ICON_LIBRARY_DIR =
  "src/BIMDataComponents/BIMDataIcon/BIMDataLibraryIcons";
const DEFAULT_ICON_STANDALONE_DIR =
  "src/BIMDataComponents/BIMDataIcon/BIMDataIconStandalone";

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function extractSection(content, tagName) {
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = content.match(pattern);
  return match?.[1]?.trim() ?? "";
}

function findMatchingBracket(text, openIndex, openChar, closeChar) {
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (let i = openIndex; i < text.length; i += 1) {
    const ch = text[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === "\\") {
      escaped = true;
      continue;
    }

    if (!inDouble && !inTemplate && ch === "'") {
      inSingle = !inSingle;
      continue;
    }

    if (!inSingle && !inTemplate && ch === '"') {
      inDouble = !inDouble;
      continue;
    }

    if (!inSingle && !inDouble && ch === "`") {
      inTemplate = !inTemplate;
      continue;
    }

    if (inSingle || inDouble || inTemplate) {
      continue;
    }

    if (ch === openChar) {
      depth += 1;
    } else if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) {
        return i;
      }
    }
  }

  return -1;
}

function extractObjectAfterKeyword(content, keywordRegex) {
  const match = keywordRegex.exec(content);
  if (!match) {
    return "";
  }

  const startSearchIndex = match.index + match[0].length;
  const firstTokenIndex = content.slice(startSearchIndex).search(/\S/);
  if (firstTokenIndex === -1) {
    return "";
  }

  const openIndex = startSearchIndex + firstTokenIndex;
  if (content[openIndex] !== "{") {
    return "";
  }

  if (openIndex === -1) {
    return "";
  }

  const closeIndex = findMatchingBracket(content, openIndex, "{", "}");
  if (closeIndex === -1) {
    return "";
  }

  return content.slice(openIndex + 1, closeIndex);
}

function extractArrayAfterKeyword(content, keywordRegex) {
  const match = keywordRegex.exec(content);
  if (!match) {
    return "";
  }

  const startSearchIndex = match.index + match[0].length;
  const firstTokenIndex = content.slice(startSearchIndex).search(/\S/);
  if (firstTokenIndex === -1) {
    return "";
  }

  const openIndex = startSearchIndex + firstTokenIndex;
  if (content[openIndex] !== "[") {
    return "";
  }

  if (openIndex === -1) {
    return "";
  }

  const closeIndex = findMatchingBracket(content, openIndex, "[", "]");
  if (closeIndex === -1) {
    return "";
  }

  return content.slice(openIndex + 1, closeIndex);
}

function splitTopLevelEntries(raw) {
  const entries = [];
  let start = 0;
  let depthCurly = 0;
  let depthSquare = 0;
  let depthParen = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === "\\") {
      escaped = true;
      continue;
    }

    if (!inDouble && !inTemplate && ch === "'") {
      inSingle = !inSingle;
      continue;
    }

    if (!inSingle && !inTemplate && ch === '"') {
      inDouble = !inDouble;
      continue;
    }

    if (!inSingle && !inDouble && ch === "`") {
      inTemplate = !inTemplate;
      continue;
    }

    if (inSingle || inDouble || inTemplate) {
      continue;
    }

    if (ch === "{") depthCurly += 1;
    else if (ch === "}") depthCurly -= 1;
    else if (ch === "[") depthSquare += 1;
    else if (ch === "]") depthSquare -= 1;
    else if (ch === "(") depthParen += 1;
    else if (ch === ")") depthParen -= 1;

    if (
      ch === "," &&
      depthCurly === 0 &&
      depthSquare === 0 &&
      depthParen === 0
    ) {
      const segment = raw.slice(start, i).trim();
      if (segment) {
        entries.push(segment);
      }
      start = i + 1;
    }
  }

  const tail = raw.slice(start).trim();
  if (tail) {
    entries.push(tail);
  }

  return entries;
}

function stripQuotes(value) {
  return value.replace(/^['"]|['"]$/g, "");
}

function parseLiteralValue(rawValue) {
  const trimmed = rawValue.trim();
  if (!trimmed) {
    return "";
  }

  if (/^['"].*['"]$/.test(trimmed)) {
    return stripQuotes(trimmed);
  }

  if (/^(true|false|null)$/i.test(trimmed)) {
    return trimmed.toLowerCase();
  }

  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }

  return normalizeWhitespace(trimmed);
}

function parsePropsObject(rawPropsObject) {
  const entries = splitTopLevelEntries(rawPropsObject);
  const props = [];

  for (const entry of entries) {
    const keyMatch = entry.match(/^([A-Za-z_$][\w$-]*)\s*:/);
    if (!keyMatch) {
      continue;
    }

    const propName = keyMatch[1];
    const valueRaw = entry.slice(keyMatch[0].length).trim();

    if (/^\{[\s\S]*\}$/.test(valueRaw)) {
      const typeMatch = valueRaw.match(/\btype\s*:\s*([^,}\n]+)/);
      const requiredMatch = valueRaw.match(/\brequired\s*:\s*(true|false)/);
      const defaultMatch = valueRaw.match(/\bdefault\s*:\s*([^,}\n]+)/);

      props.push({
        name: propName,
        type: typeMatch ? normalizeWhitespace(typeMatch[1]) : "unknown",
        required: requiredMatch ? requiredMatch[1] === "true" : false,
        default: defaultMatch ? parseLiteralValue(defaultMatch[1]) : undefined,
      });
    } else {
      props.push({
        name: propName,
        type: normalizeWhitespace(valueRaw),
        required: false,
      });
    }
  }

  return props;
}

function parseProps(content) {
  const propsFromArray = extractArrayAfterKeyword(content, /\bprops\s*:\s*/g);
  if (propsFromArray) {
    return splitTopLevelEntries(propsFromArray)
      .map(prop => stripQuotes(prop.trim()))
      .filter(Boolean)
      .map(name => ({ name, type: "unknown", required: false }));
  }

  const propsObject = extractObjectAfterKeyword(content, /\bprops\s*:\s*/g);
  if (propsObject) {
    return parsePropsObject(propsObject);
  }

  const definePropsObject = extractObjectAfterKeyword(content, /\bdefineProps\s*\(\s*/g);
  if (definePropsObject) {
    return parsePropsObject(definePropsObject);
  }

  return [];
}

function parseEmits(content, templateContent = "") {
  const emits = [];

  const emitsArray = extractArrayAfterKeyword(content, /\bemits\s*:\s*/g);
  if (emitsArray) {
    emits.push(
      ...splitTopLevelEntries(emitsArray)
        .map(item => stripQuotes(item.trim()))
        .filter(Boolean),
    );
  }

  const defineEmitsArray = extractArrayAfterKeyword(
    content,
    /\bdefineEmits\s*\(\s*/g,
  );
  if (defineEmitsArray) {
    emits.push(
      ...splitTopLevelEntries(defineEmitsArray)
        .map(item => stripQuotes(item.trim()))
        .filter(Boolean),
    );
  }

  const inlineTemplateEmits = [
    ...templateContent.matchAll(/\$emit\(\s*['"]([^'"]+)['"]/g),
  ].map(match => match[1]);

  emits.push(...inlineTemplateEmits);
  return unique(emits).sort();
}

function parseSlots(templateContent) {
  const slots = [];

  for (const match of templateContent.matchAll(/<slot\b([^>]*)>/g)) {
    const attrs = match[1] ?? "";
    const namedMatch = attrs.match(/\bname\s*=\s*['"]([^'"]+)['"]/);
    slots.push(namedMatch ? namedMatch[1] : "default");
  }

  return unique(slots).sort();
}

function parseUsedComponents(content, templateContent) {
  const imported = [
    ...content.matchAll(
      /import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]([^'"]+)['"]/g,
    ),
  ]
    .filter(match =>
      /BIMDataComponents|\.\.\/BIMData|\.\/BIMData|BIMData[A-Za-z]/.test(match[2]),
    )
    .map(match => match[1]);

  const usedInTemplate = [
    ...templateContent.matchAll(/<\/?(BIMData[A-Za-z0-9]+)/g),
  ].map(match => match[1]);

  return unique([...imported, ...usedInTemplate]).sort();
}

function parsePublicExports(indexFileContent) {
  const exports = [];

  for (const match of indexFileContent.matchAll(
    /export\s+\{\s*default\s+as\s+([A-Za-z_$][\w$]*)\s*\}\s+from\s+['"]([^'"]+)['"]/g,
  )) {
    exports.push({
      name: match[1],
      relativePath: match[2],
    });
  }

  return exports;
}

function mapTypeToTag(componentName) {
  const stripped = componentName.replace(/^BIMData/, "");
  const words = stripped.match(/[A-Z][a-z]+|[A-Z]+(?![a-z])|\d+/g) || [stripped];
  return words.map(word => word.toLowerCase());
}

function parseFrozenArrayFile(content) {
  const freezeMatch = content.match(/Object\.freeze\s*\(\s*\[([\s\S]*?)\]\s*\)/);
  if (!freezeMatch) {
    return [];
  }

  return [...freezeMatch[1].matchAll(/['"]([^'"]+)['"]/g)].map(match => match[1]);
}

function parseCssVariables(content) {
  return [...content.matchAll(/(--[A-Za-z0-9-_]+)\s*:\s*([^;]+);/g)].map(match => ({
    name: match[1],
    value: normalizeWhitespace(match[2]),
  }));
}

function parseCssClasses(content) {
  return unique(
    [...content.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)\s*\{/g)].map(match => match[1]),
  );
}

async function listFilesRecursive(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursive(absolutePath)));
    } else {
      files.push(absolutePath);
    }
  }

  return files;
}

function iconNameFromFileName(fileName) {
  const noExt = fileName.replace(/\.vue$/i, "");
  return noExt.replace(/^BIMDataIcon/, "");
}

export class ComponentIndex {
  constructor({
    rootDir = process.cwd(),
    componentsDir = DEFAULT_COMPONENTS_DIR,
    exportsFile = DEFAULT_EXPORTS_FILE,
    colorsFile = DEFAULT_COLORS_FILE,
    iconsColorsFile = DEFAULT_ICONS_COLORS_FILE,
    variablesFile = DEFAULT_VARIABLES_FILE,
    utilitiesDir = DEFAULT_UTILITIES_DIR,
    iconLibraryDir = DEFAULT_ICON_LIBRARY_DIR,
    iconStandaloneDir = DEFAULT_ICON_STANDALONE_DIR,
  } = {}) {
    this.rootDir = rootDir;
    this.componentsDir = path.resolve(this.rootDir, componentsDir);
    this.exportsFile = path.resolve(this.rootDir, exportsFile);
    this.colorsFile = path.resolve(this.rootDir, colorsFile);
    this.iconsColorsFile = path.resolve(this.rootDir, iconsColorsFile);
    this.variablesFile = path.resolve(this.rootDir, variablesFile);
    this.utilitiesDir = path.resolve(this.rootDir, utilitiesDir);
    this.iconLibraryDir = path.resolve(this.rootDir, iconLibraryDir);
    this.iconStandaloneDir = path.resolve(this.rootDir, iconStandaloneDir);
    this.builtAt = null;
    this.components = [];
    this.byName = new Map();
    this.tokens = {
      colors: [],
      iconColors: [],
      cssVariables: [],
    };
    this.cssClasses = [];
    this.icons = [];
  }

  async build() {
    const indexContent = await fs.readFile(this.exportsFile, "utf8");
    const publicExports = parsePublicExports(indexContent);

    const components = [];

    for (const exportedComponent of publicExports) {
      const sourceAbsolutePath = path.resolve(
        this.componentsDir,
        exportedComponent.relativePath,
      );
      const sourceContent = await fs.readFile(sourceAbsolutePath, "utf8");

      const template = extractSection(sourceContent, "template");
      const script = extractSection(sourceContent, "script");
      const style = extractSection(sourceContent, "style");

      const props = parseProps(script || sourceContent);
      const emits = parseEmits(script || sourceContent, template);
      const slots = parseSlots(template);
      const usesComponents = parseUsedComponents(script || sourceContent, template);

      const relativePath = path.relative(this.rootDir, sourceAbsolutePath).replace(/\\/g, "/");

      components.push({
        name: exportedComponent.name,
        path: relativePath,
        exportPath: exportedComponent.relativePath,
        tags: mapTypeToTag(exportedComponent.name),
        props,
        emits,
        slots,
        usesComponents,
        source: {
          template,
          script,
          style,
        },
      });
    }

    this.components = components.sort((a, b) => a.name.localeCompare(b.name));
    this.byName = new Map(this.components.map(component => [component.name, component]));

    const [
      colorsContent,
      iconsColorsContent,
      variablesContent,
      utilityFiles,
      libraryIconFiles,
      standaloneIconFiles,
    ] = await Promise.all([
      fs.readFile(this.colorsFile, "utf8"),
      fs.readFile(this.iconsColorsFile, "utf8"),
      fs.readFile(this.variablesFile, "utf8"),
      listFilesRecursive(this.utilitiesDir),
      listFilesRecursive(this.iconLibraryDir),
      listFilesRecursive(this.iconStandaloneDir),
    ]);

    this.tokens = {
      colors: unique(parseFrozenArrayFile(colorsContent)).sort(),
      iconColors: unique(parseFrozenArrayFile(iconsColorsContent)).sort(),
      cssVariables: parseCssVariables(variablesContent).sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    };

    const utilityCssFiles = utilityFiles.filter(filePath => filePath.endsWith(".css"));
    const classesPerFile = await Promise.all(
      utilityCssFiles.map(async filePath => {
        const content = await fs.readFile(filePath, "utf8");
        const relativePath = path.relative(this.rootDir, filePath).replace(/\\/g, "/");

        return parseCssClasses(content).map(className => ({
          name: className,
          path: relativePath,
        }));
      }),
    );

    this.cssClasses = classesPerFile
      .flat()
      .sort((a, b) => a.name.localeCompare(b.name) || a.path.localeCompare(b.path));

    const iconFiles = [
      ...libraryIconFiles.map(filePath => ({ filePath, type: "library" })),
      ...standaloneIconFiles.map(filePath => ({ filePath, type: "standalone" })),
    ].filter(item => item.filePath.endsWith(".vue"));

    const icons = await Promise.all(
      iconFiles.map(async ({ filePath, type }) => {
        const content = await fs.readFile(filePath, "utf8");
        const template = extractSection(content, "template");
        const relativePath = path.relative(this.rootDir, filePath).replace(/\\/g, "/");
        const fileName = path.basename(filePath);

        return {
          name: iconNameFromFileName(fileName),
          type,
          fileName,
          path: relativePath,
          pathCount: [...template.matchAll(/<path\b/g)].length,
          hasTemplate: Boolean(template),
        };
      }),
    );

    this.icons = icons.sort(
      (a, b) => a.name.localeCompare(b.name) || a.type.localeCompare(b.type),
    );

    this.builtAt = new Date().toISOString();

    return {
      total: this.components.length,
      totalCssClasses: this.cssClasses.length,
      totalIcons: this.icons.length,
      builtAt: this.builtAt,
    };
  }

  list() {
    const items = this.components.map(component => ({
      name: component.name,
      path: component.path,
      tags: component.tags,
      propsCount: component.props.length,
      emitsCount: component.emits.length,
      slotsCount: component.slots.length,
    }));

    return {
      total: this.components.length,
      builtAt: this.builtAt,
      items,
    };
  }

  search({ query } = {}) {
    if (!query || !query.trim()) {
      return {
        total: 0,
        query: query || "",
        items: [],
      };
    }

    const normalized = query.trim().toLowerCase();

    const scored = this.components
      .map(component => {
        const haystack = [
          component.name,
          component.path,
          component.tags.join(" "),
          component.props.map(prop => prop.name).join(" "),
          component.emits.join(" "),
          component.slots.join(" "),
          component.usesComponents.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        let score = 0;
        if (component.name.toLowerCase() === normalized) score += 100;
        if (component.name.toLowerCase().includes(normalized)) score += 40;
        if (component.tags.some(tag => tag.includes(normalized))) score += 20;
        if (haystack.includes(normalized)) score += 10;

        return { component, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score || a.component.name.localeCompare(b.component.name));

    const items = scored.map(({ component, score }) => ({
      score,
      name: component.name,
      path: component.path,
      tags: component.tags,
      matched: {
        props: component.props
          .filter(prop => prop.name.toLowerCase().includes(normalized))
          .map(prop => prop.name),
        emits: component.emits.filter(eventName =>
          eventName.toLowerCase().includes(normalized),
        ),
        slots: component.slots.filter(slotName =>
          slotName.toLowerCase().includes(normalized),
        ),
      },
    }));

    return {
      query,
      total: scored.length,
      builtAt: this.builtAt,
      items,
    };
  }

  details(name) {
    const component = this.byName.get(name);
    if (!component) {
      return null;
    }

    const usedBy = this.components
      .filter(other => other.usesComponents.includes(name) && other.name !== name)
      .map(other => other.name)
      .sort();

    return {
      name: component.name,
      path: component.path,
      exportPath: component.exportPath,
      tags: component.tags,
      props: component.props,
      emits: component.emits,
      slots: component.slots,
      usesComponents: component.usesComponents,
      usedBy,
      sourceLengths: {
        template: component.source.template.length,
        script: component.source.script.length,
        style: component.source.style.length,
      },
      builtAt: this.builtAt,
    };
  }

  source(name, { section = "full" } = {}) {
    const component = this.byName.get(name);
    if (!component) {
      return null;
    }

    let payload;

    if (section === "template") {
      payload = component.source.template;
    } else if (section === "script") {
      payload = component.source.script;
    } else if (section === "style") {
      payload = component.source.style;
    } else {
      payload = [
        "<template>",
        component.source.template,
        "</template>",
        "",
        "<script>",
        component.source.script,
        "</script>",
        "",
        "<style>",
        component.source.style,
        "</style>",
      ].join("\n");
    }

    return {
      name: component.name,
      path: component.path,
      section,
      truncated: false,
      maxChars: null,
      content: payload,
      builtAt: this.builtAt,
    };
  }

  byFeature({ prop, event, slot, usesComponent } = {}) {

    const propNeedle = prop?.toLowerCase();
    const eventNeedle = event?.toLowerCase();
    const slotNeedle = slot?.toLowerCase();
    const usesNeedle = usesComponent?.toLowerCase();

    const items = this.components
      .filter(component => {
        if (propNeedle) {
          const matched = component.props.some(propInfo =>
            propInfo.name.toLowerCase().includes(propNeedle),
          );
          if (!matched) return false;
        }

        if (eventNeedle) {
          const matched = component.emits.some(eventName =>
            eventName.toLowerCase().includes(eventNeedle),
          );
          if (!matched) return false;
        }

        if (slotNeedle) {
          const matched = component.slots.some(slotName =>
            slotName.toLowerCase().includes(slotNeedle),
          );
          if (!matched) return false;
        }

        if (usesNeedle) {
          const matched = component.usesComponents.some(used =>
            used.toLowerCase().includes(usesNeedle),
          );
          if (!matched) return false;
        }

        return true;
      })
      .map(component => ({
        name: component.name,
        path: component.path,
        props: component.props.map(propInfo => propInfo.name),
        emits: component.emits,
        slots: component.slots,
        usesComponents: component.usesComponents,
      }));

    return {
      filters: {
        prop: prop ?? null,
        event: event ?? null,
        slot: slot ?? null,
        usesComponent: usesComponent ?? null,
      },
      total: items.length,
      builtAt: this.builtAt,
      items,
    };
  }

  listTokens() {
    return {
      builtAt: this.builtAt,
      counts: {
        colors: this.tokens.colors.length,
        iconColors: this.tokens.iconColors.length,
        cssVariables: this.tokens.cssVariables.length,
      },
      colors: this.tokens.colors,
      iconColors: this.tokens.iconColors,
      cssVariables: this.tokens.cssVariables,
    };
  }

  searchTokens({ query } = {}) {
    if (!query || !query.trim()) {
      return {
        query: query || "",
        total: 0,
        builtAt: this.builtAt,
        items: [],
      };
    }

    const normalized = query.trim().toLowerCase();
    const items = [];

    for (const color of this.tokens.colors) {
      if (color.toLowerCase().includes(normalized)) {
        items.push({ type: "color", name: color });
      }
    }

    for (const iconColor of this.tokens.iconColors) {
      if (iconColor.toLowerCase().includes(normalized)) {
        items.push({ type: "icon-color", name: iconColor });
      }
    }

    for (const cssVar of this.tokens.cssVariables) {
      if (
        cssVar.name.toLowerCase().includes(normalized) ||
        cssVar.value.toLowerCase().includes(normalized)
      ) {
        items.push({
          type: "css-variable",
          name: cssVar.name,
          value: cssVar.value,
        });
      }
    }

    return {
      query,
      total: items.length,
      builtAt: this.builtAt,
      items,
    };
  }

  listCssClasses() {
    return {
      total: this.cssClasses.length,
      builtAt: this.builtAt,
      items: this.cssClasses,
    };
  }

  searchCssClasses({ query } = {}) {
    if (!query || !query.trim()) {
      return {
        query: query || "",
        total: 0,
        builtAt: this.builtAt,
        items: [],
      };
    }

    const normalized = query.trim().toLowerCase();
    const items = this.cssClasses.filter(
      item =>
        item.name.toLowerCase().includes(normalized) ||
        item.path.toLowerCase().includes(normalized),
    );

    return {
      query,
      total: items.length,
      builtAt: this.builtAt,
      items,
    };
  }

  listIcons() {
    return {
      total: this.icons.length,
      builtAt: this.builtAt,
      items: this.icons,
    };
  }

  searchIcons({ query, type } = {}) {
    if (!query || !query.trim()) {
      return {
        query: query || "",
        type: type ?? null,
        total: 0,
        builtAt: this.builtAt,
        items: [],
      };
    }

    const normalized = query.trim().toLowerCase();
    const normalizedType = type?.toLowerCase();
    const items = this.icons.filter(icon => {
      if (normalizedType && icon.type !== normalizedType) {
        return false;
      }

      return (
        icon.name.toLowerCase().includes(normalized) ||
        icon.fileName.toLowerCase().includes(normalized) ||
        icon.path.toLowerCase().includes(normalized)
      );
    });

    return {
      query,
      type: type ?? null,
      total: items.length,
      builtAt: this.builtAt,
      items,
    };
  }

  iconDetails({ name, type } = {}) {
    if (!name || !name.trim()) {
      return null;
    }

    const normalizedName = name.trim().toLowerCase();
    const normalizedType = type?.toLowerCase();
    const items = this.icons.filter(icon => {
      if (normalizedType && icon.type !== normalizedType) {
        return false;
      }
      return icon.name.toLowerCase() === normalizedName;
    });

    return {
      name,
      type: type ?? null,
      total: items.length,
      builtAt: this.builtAt,
      items,
    };
  }
}
