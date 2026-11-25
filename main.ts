const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const line = "First paycheck: spent entirely on tokens.";
const words = line.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error("entry must be exactly six words");
}
if (line.length < 1 || line.length > 60) {
  throw new Error("entry must be 1-60 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
