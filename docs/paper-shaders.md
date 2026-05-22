# Paper Shaders

This repo uses `@paper-design/shaders-react` for WebGL shader visuals.

## Setup notes

- Keep `@paper-design/shaders-react` pinned to an exact `0.0.x` version. The upstream README says breaking changes can ship under `0.0.x`.
- Import shader components only from Client Components. Pages and layouts should stay Server Components unless they need browser APIs.
- Put decorative shaders behind real HTML content and a CSS fallback, so the page remains usable before hydration and on devices without WebGL.
- Respect `prefers-reduced-motion` by setting animated shader `speed` to `0`. Paper documents that `speed=0` stops the animation loop.
- Cap `maxPixelCount` and set a conservative `minPixelRatio` for full-viewport backgrounds. This keeps the shader from over-rendering on very high-resolution displays.
- Use `aria-hidden="true"` and `pointer-events: none` for decorative shader layers.

## References

- Paper Shaders docs: https://shaders.paper.design/
- Mesh Gradient props: https://shaders.paper.design/mesh-gradient
- Paper Shaders README and license notes: https://github.com/paper-design/shaders
