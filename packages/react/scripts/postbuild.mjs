import { readFileSync, writeFileSync } from "node:fs"

// Ship the raw `@theme` sources as the `./theme` entry point: design tokens (theme.css) plus
// animation tokens & keyframes (animations.css). Tailwind-using consumers can
// `@import "@cora-ui/react/theme"` to register them in their own build (so token utilities like
// `bg-info` / `text-muted` / `animate-jelly` resolve), separate from the fully compiled
// `./styles` bundle. Build-time only.
const sources = ["src/styles/theme.css", "src/styles/animations.css"]
const merged = sources.map((file) => readFileSync(file, "utf8")).join("\n")
writeFileSync("build/theme.css", merged + "\n")
