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
    window.addEventListener(binding.arg || "click", el.clickAwayHandler, true);
  },
  unbind(el, binding) {
    window.removeEventListener(
      binding.arg || "click",
      el.clickAwayHandler,
      true
    );
    delete el.clickAwayHandler;
  },
};
