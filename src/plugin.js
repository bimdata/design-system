import BIMDataButton from "./BIMDataComponents/BIMDataButton/BIMDataButton.js";
import BIMDataCard from "./BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataCardBand from "./BIMDataComponents/BIMDataCard/BIMDataCardBand.vue";

const components = [BIMDataButton, BIMDataCard, BIMDataCardBand];

const BIMData = {
  install(Vue) {
    // Vue.component(BIMDataButton.name, BIMDataButton)
    components.forEach(component => Vue.component(component.name, component));
  },
};

// Automatic installation if Vue has been added to the global scope
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(BIMData);
}

export default BIMData;
