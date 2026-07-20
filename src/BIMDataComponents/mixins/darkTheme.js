/**
 * Shared mixin that exposes a normalized `isDark` computed to every
 * BIMData component.
 *
 * Resolution order:
 *   1. If the component receives an explicit `dark` prop (true or false),
 *      that value wins — allowing a component to force light or dark
 *      independently from any surrounding provider.
 *   2. Otherwise, fall back to the value provided through the
 *      `BIMDATA_DESIGN_SYSTEM_DARK_THEME` injection (a `Ref<boolean>` when
 *      the design-system plugin is properly wired).
 *   3. When neither a prop nor a provider is set, the component renders
 *      in light mode (the default of the design-system).
 *
 * The prop uses `default: null` so we can distinguish between:
 *   - `<Comp />`               → prop is null → follow the provider
 *   - `<Comp dark />`          → prop is true → force dark
 *   - `<Comp :dark="false" />` → prop is false → force light
 */
export default {
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: null,
    },
  },
  props: {
    dark: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    isDark() {
      if (this.dark === true) return true;
      if (this.dark === false) return false;
      const injected = this.darkThemeRef;
      if (injected == null) return false;
      if (typeof injected === "object" && "value" in injected) {
        return !!injected.value;
      }
      return !!injected;
    },
  },
};
