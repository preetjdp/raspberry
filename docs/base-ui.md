# Base UI conventions

Use these conventions when adding Base UI components to this app.

- Keep pages and layouts as Server Components by default. Put interactive Base UI composition in focused Client Components.
- Import components from subpaths, for example `@base-ui/react/popover`, so unused components stay tree-shakable.
- Use the app-level `BaseUIProvider` for Direction Provider and CSP Provider configuration; do not duplicate those providers in leaf components.
- Keep `<html dir="ltr">` and `BaseUIProvider direction="ltr"` in sync. Change both if the app adds RTL support.
- Use Base UI's `Portal`, `Positioner`, and `Popup` parts for floating UI instead of custom portal stacks.
- Give every form control and custom control an accessible name with the matching Base UI label part, a native `<label>`, `aria-label`, or `aria-labelledby`.
- Style focus states for every interactive part. The global `:focus-visible` rule is only a fallback; component styles may override it intentionally.
- Prefer Base UI data attributes and CSS variables for states and layout-dependent styling.
- When using the `render` prop with custom components, forward the ref and spread all received props onto the underlying DOM element.
- If a strict CSP is added, generate a per-request nonce, include it in the CSP header, and pass it to `BaseUIProvider`.
