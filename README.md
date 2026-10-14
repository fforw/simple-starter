# Simple Starter

Simple TypeScript build starter for simple, client-only demos,
using [Vite](https://vite.dev) and [pnpm](https://pnpm.io).

## Usage

    pnpm install
    pnpm dev        # dev server with hot reload
    pnpm build      # type-check and build into docs/
    pnpm preview    # serve the production build
    pnpm test       # run the vitest tests in test/

## Layout

* `index.html` / `test.html` -- page entry points
* `src/` -- TypeScript sources and CSS
* `public/media/` -- copied verbatim to `docs/media/`
* `test/` -- vitest tests (`*.test.ts`)

GLSL files (`.glsl`, `.vert`, `.frag`) can be imported as strings
via vite-plugin-glsl, including `#include` support.

The compile-time constants `__PROD`, `__DEV` and `__STATS` (set via
the `STATS` environment variable) are available in all sources.
