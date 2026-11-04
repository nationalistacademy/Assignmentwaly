import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const required = [
  "index.html",
  "guides/index.html",
  "guides/aiou-bed-15-25-4-solved-assignments.html",
  "guides/bs-solved-assignments-spring-2026-all.html",
  "assets/css/guides.css",
  "sitemap.xml",
  "robots.txt"
];
const missing = required.filter((p) => !existsSync(resolve(p)));
if (missing.length) {
  console.error("Missing assignment-site files:", missing.join(", "));
  process.exit(1);
}
const index = readFileSync("index.html", "utf8");
const guides = readFileSync("guides/index.html", "utf8");
const sitemap = readFileSync("sitemap.xml", "utf8");
const robots = readFileSync("robots.txt", "utf8");
const combined = index + guides;
const forbidden = [
  /guess papers?/i,
  /admissions?/i,
  /assignment builder/i,
  /MCQ practice/i,
  /mock tests?/i,
  /content library/i
];
const checks = [
  ["homepage identifies Assignmentwaly as assignment resource", /AIOU Assignments &amp; Student Guidance/.test(index)],
  ["homepage links assignment guides", /guides\/index\.html/.test(index)],
  ["guide directory includes programme, format, integrity and submission sections", ["programmes","format","integrity","submission"].every((id) => guides.includes('id="' + id + '"'))],
  ["public homepage and guide directory do not promote excluded categories", forbidden.every((pattern) => !pattern.test(combined))],
  ["sitemap contains only the assignment homepage and guide directory", (sitemap.match(/<loc>/g) || []).length === 2 && !/guess|builder|library|admission|book/i.test(sitemap)],
  ["robots references the current sitemap", /Sitemap:\s*https:\/\/nationalistacademy\.github\.io\/Assignmentwaly\/sitemap\.xml/.test(robots)]
];
let failed = 0;
for (const [name, ok] of checks) {
  console.log((ok ? "PASS " : "FAIL ") + name);
  if (!ok) failed++;
}
if (failed) process.exit(1);
console.log("Assignmentwaly scope checks passed.");
