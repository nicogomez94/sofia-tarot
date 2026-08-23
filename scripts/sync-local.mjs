import { cp, readFile, writeFile } from "node:fs/promises";

const builtIndex = await readFile("dist/index.html", "utf8");
const cacheBuster = process.env.RENDER_GIT_COMMIT || Date.now().toString();
const localIndex = builtIndex
  .replace(/<script type="module" crossorigin src="\.\/assets\/site\.js"><\/script>/, `<script src="./assets/site.js?v=${cacheBuster}" defer></script>`);

await writeFile("index.html", localIndex);
await cp("dist/assets", "assets", { recursive: true });
