import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const required = [
  "index.html",
  "assets/css/styles.css",
  "assets/js/app.js",
  "docs/legal-compliance.md",
  "docs/academic-integrity.md",
  "docs/privacy-data-handling.md",
  "docs/service-catalogue.md",
  "docs/roadmap.md"
];

const missing = required.filter(path => !existsSync(resolve(root, path)));
if (missing.length) {
  console.error("Missing required project files:", missing.join(", "));
  process.exitCode = 1;
} else {
  const html = readFileSync(resolve(root, "index.html"), "utf8");
  const checks = [
    ["responsive viewport", /name="viewport"/i.test(html)],
    ["page title", /<title>Assignmentwaly/i.test(html)],
    ["main landmark", /<main\b/i.test(html)],
    ["service search input", /id="service-search"/i.test(html)],
    ["legal disclaimer", /not legal advice/i.test(html)],
    ["stylesheet reference", /assets\/css\/styles\.css/i.test(html)],
    ["script reference", /assets\/js\/app\.js/i.test(html)]
  ];
  const failed = checks.filter(([, passed]) => !passed);
  for (const [name, passed] of checks) {
    console.log((passed ? "PASS " : "FAIL ") + name);
  }
  if (failed.length) process.exitCode = 1;
  else console.log("Static-site smoke check passed.");
}
