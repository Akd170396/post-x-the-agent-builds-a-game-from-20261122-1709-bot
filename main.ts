// Entry program for the make.fun bounty
// "post-x-the-agent-builds-a-game-from-20261122-1709".
// The entry is an X post; this program's only job is to hand the
// house the post's address by copying POST.json into /output.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
const dst = join(outDir, "POST.json");

const raw = readFileSync(src, "utf8");
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json must hold an https url string");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

console.log("POST.json copied to", dst, "->", post.url);
