import { copyFile } from "node:fs/promises";

await copyFile("index.dev.html", "index.html");
