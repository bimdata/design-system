import * as Components from "./src/BIMDataComponents/index.js";
import * as Directives from "./src/BIMDataDirectives/index.js";

/**
 * Register all components and directives from the design system.
 *
 * @param {
 *  {
 *    includedComponents?: string[],
 *    excludedComponents?: string[],
 *    directives?: boolean,
 *  }
 * } [cfg]
 */
const pluginFactory = cfg => {
  return {
    install(app) {
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
