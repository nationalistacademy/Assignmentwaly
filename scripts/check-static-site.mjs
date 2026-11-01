import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const required = [
  "index.html",
  "assets/css/styles.css",
  "assets/js/app.js",
  "tools/assignment-builder.html",
  "docs/agent-tasking.md",
  "docs/original-article-workflow.md",
  "docs/academic-integrity.md",
  "docs/privacy-data-handling.md",
  "docs/roadmap.md"
];
const missing = required.filter(path => !existsSync(resolve(root, path)));
if (missing.length) {
  console.error("Missing required project files:", missing.join(", "));
  process.exitCode = 1;
} else {
  const html = readFileSync(resolve(root, "index.html"), "utf8");
  const tool = readFileSync(resolve(root, "tools/assignment-builder.html"), "utf8");
  const checks = [
    ["responsive viewport", /name="viewport"/i.test(html)],
    ["tools-first page title", /<title>Assignmentwaly — Free Study & Research Tools<\/title>/i.test(html)],
    ["main landmark", /<main\b/i.test(html)],
    ["tools search input", /id="tool-search"/i.test(html)],
    ["assignment builder linked", /tools\/assignment-builder\.html/i.test(html)],
    ["article companion workflow", /free companion/i.test(html)],
    ["tool local draft storage", /localStorage\.setItem/i.test(tool)],
    ["tool TXT export", /download-txt/i.test(tool)],
    ["tool print/PDF action", /window\.print\(\)/i.test(tool)],
    ["stylesheet reference", /assets\/css\/styles\.css/i.test(html)],
    ["script reference", /assets\/js\/app\.js/i.test(html)]
  ];
  const failed = checks.filter(([, passed]) => !passed);
  for (const [name, passed] of checks) console.log((passed ? "PASS " : "FAIL ") + name);
  if (failed.length) process.exitCode = 1;
  else console.log("Static-site smoke check passed.");
}
