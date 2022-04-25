export default {
  bind(el, binding) {
    if (typeof binding.value !== "function") {
      throw Error(
        `click away directive needs function, got ${typeof binding.value}`
      );
    }
    el.clickAwayHandler = event => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.find(element => element === el)) {
        binding.value();
      }
    };
    window.addEventListener("mousedown", el.clickAwayHandler, true);
  },
  unbind(el) {
    window.removeEventListener("mousedown", el.clickAwayHandler, true);
    delete el.clickAwayHandler;
  },
};
