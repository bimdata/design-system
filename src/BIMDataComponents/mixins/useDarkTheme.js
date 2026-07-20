import { inject, computed } from "vue";

/**
 * Composition API equivalent of the `darkTheme` mixin.
 *
 * Resolution order:
 *   1. Explicit `dark` prop (true / false) wins.
 *   2. Otherwise, injected `BIMDATA_DESIGN_SYSTEM_DARK_THEME` (Ref<boolean>).
 *   3. Default is light mode.
 *
 * @param {object} props The component props object (must expose `dark`).
 * @returns {import("vue").ComputedRef<boolean>} A reactive `isDark` flag.
 */
export function useDarkTheme(props) {
  const darkThemeRef = inject("BIMDATA_DESIGN_SYSTEM_DARK_THEME", null);

  return computed(() => {
    if (props?.dark === true) return true;
    if (props?.dark === false) return false;
    if (darkThemeRef == null) return false;
    if (typeof darkThemeRef === "object" && "value" in darkThemeRef) {
      return !!darkThemeRef.value;
    }
    return !!darkThemeRef;
  });
}

/**
 * Shared prop definition for the optional `dark` prop.
 *
 * Using `default: null` allows components to distinguish between
 * "no prop provided" (fall back to the provider) and an explicit
 * `false` (force light mode even inside a dark provider).
 */
export const darkProp = {
  type: Boolean,
  default: null,
};
