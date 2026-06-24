### Spacing Utility Convention (Margin and Padding)

Use spacing classes in the format: `{type}-{direction?}-{value}`

- `type` (required):
  - `m` = margin
  - `p` = padding
- `direction` (optional):
  - `t` = top
  - `b` = bottom
  - `l` = left
  - `r` = right
  - `x` = left + right
  - `y` = top + bottom
- `value` (required): `6`, `12`, `18`, or `24` (pixels)

Examples:

- `m-12` → `margin: 12px;`
- `m-r-6` → `margin-right: 6px;`
- `m-y-24` → `margin-top: 24px; margin-bottom: 24px;`

### Box Shadow Convention

--box-shadow = 0px 2px 10px rgba(0, 0, 0, 0.1)
--box-shadow-dark = 0 2px 10px 0 rgba(0, 0, 0, 0.3)

### Color Convention

Use design-system color tokens and utility classes. Do not hardcode HEX or RGB values.

Format

- Token: `--color-{name}` or `--color-{name}-{variant}`
- Utility class: `{property}-{tokenName}`

Properties

- `bg` = `background-color`
- `color` = text color
- `fill` = SVG fill
- `stroke` = SVG stroke

Token families

- Brand: `primary`, `secondary`, `tertiary`, `quaternary`
- Neutrals: `white`, `silver-light`, `silver`, `silver-dark`, `granite-light`, `granite`, `black`
- States: `success`, `warning`, `high`, `neutral`
- Actions: `action-high`, `action-medium`
- Text: `text`

Variants

- Prefer `light`, `lighter`, `dark` (and `darker` only when defined).
- Use only tokens that exist in `variables.css`.

Examples

- `bg-primary` -> `background-color: var(--color-primary);`
- `color-warning` -> `color: var(--color-warning);`
- `fill-neutral` -> `fill: var(--color-neutral);`
- `stroke-action-high` -> `stroke: var(--color-action-high);`
