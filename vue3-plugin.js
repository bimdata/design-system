import * as Components from "./src/BIMDataComponents/index.js";
import * as Directives from "./src/BIMDataDirectives/index.js";

const ICON_PREFIX = "BIMDataIcon";
const FallbackIcon = Components.BIMDataIconQuestion;

/**
 * Make any unknown `<BIMDataIconXxx />` resolve to the default "Question" icon
 * instead of failing with "Failed to resolve component".
 *
 * Vue resolves globally registered components by reading
 * `app._context.components[name]`, so we wrap that registry in a Proxy that
 * returns the fallback icon for unregistered names starting with "BIMDataIcon".
 */
const installIconFallback = app => {
  const context = app._context;
  if (!context || !context.components) return;

  const warned = new Set();
  // Disable the fallback while `app.component()` runs: it reads the registry
  // to detect duplicates (and to look a component up), and must see real values.
  let bypass = false;
  const originalComponent = app.component;
  app.component = function (...args) {
    bypass = true;
    try {
      return originalComponent.apply(this, args);
    } finally {
      bypass = false;
    }
  };

  context.components = new Proxy(context.components, {
    get(target, key, receiver) {
      const component = Reflect.get(target, key, receiver);
      if (
        bypass ||
        component ||
        typeof key !== "string" ||
        !key.startsWith(ICON_PREFIX) ||
        key === ICON_PREFIX
      ) {
        return component;
      }
      if (!warned.has(key)) {
        warned.add(key);
        console.warn(
          `[BIMDataIcon] Unknown icon component "${key}", falling back to "${FallbackIcon.name}".`
        );
      }
      return FallbackIcon;
    },
  });
};

/**
 * Register all components and directives from the design system.
 *
 * @param {
 *  {
 *    includedComponents?: string[],
 *    excludedComponents?: string[],
 *    directives?: boolean,
 *    iconFallback?: boolean,
 *  }
 * } [cfg]
 */
const pluginFactory = cfg => {
  return {
    install(app) {
      // ICON FALLBACK
      if (!cfg || cfg.iconFallback !== false) {
        installIconFallback(app);
      }

      // COMPONENTS
      Object.entries(Components).forEach(([componentName, component]) => {
        if (
          cfg &&
          cfg.excludedComponents &&
          cfg.excludedComponents.length > 0 &&
          cfg.excludedComponents.includes(componentName)
        ) {
          return;
        }

        if (
          !cfg ||
          !cfg.includedComponents ||
          cfg.includedComponents.includes(componentName)
        ) {
          app.component(componentName, component);
        }
      });

      // DIRECTIVES
      if (!cfg || cfg.directives !== false) {
        Object.entries(Directives).forEach(([directiveName, directive]) =>
          app.directive(directiveName.split("BIMData")[1], directive)
        );
      }
    },
  };
};

export default pluginFactory;
