import * as Components from "./dist/js/BIMDataComponents/index.js";
import * as Directives from "./dist/js/BIMDataDirectives/index.js";

/**
 * Instal components and directives from the design system.
 * WARNING: The css needs to be added manually.
 * @param { { directives?: boolean, includedComponents?: string[], excludedComponents?: string[] } } [cfg]
 */
const pluginFactory = cfg => {
  return {
    install(Vue) {
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
          Vue.component(componentName, component);
        }
      });

      // DIRECTIVES
      if (!cfg || cfg.directives === false) {
        Object.entries(Directives).forEach(([directiveName, directive]) =>
          Vue.directive(directiveName.split("BIMData")[1], directive)
        );
      }
    },
  };
};

export default pluginFactory;
