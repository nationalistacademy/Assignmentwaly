import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const required = [
  "index.html",
  "library.html",
  "guides/index.html",
  "guides/aiou-guess-paper.html",
  "guides/aiou-guess-papers-2026-matric-to-master.html",
  "guides/aiou-original-books.html",
  "guides/aiou-bed-15-25-4-solved-assignments.html",
  "guides/bs-solved-assignments-spring-2026-all.html",
  "assets/css/guides.css",
  "sitemap.xml",
  "robots.txt"
];
const missing=required.filter(p=>!existsSync(resolve(p)));
if(missing.length){console.error("Missing linked-site files:",missing.join(", "));process.exit(1)}
const index=readFileSync("index.html","utf8");
const library=readFileSync("library.html","utf8");
const guideIndex=readFileSync("guides/index.html","utf8");
const sitemap=readFileSync("sitemap.xml","utf8");
const checks=[
 ["homepage links to student guides",/guides\/index\.html/.test(index)],
 ["homepage links to content library",/library\.html/.test(index)],
 ["library contains 190 archived entries",(library.match(/class="library-item"/g)||[]).length===190],
 ["guide directory links five full guides",(guideIndex.match(/class="guide-card"/g)||[]).length===5],
 ["all five guide pages have a main landmark",required.filter(p=>p.startsWith("guides/")&&p!=="guides/index.html").every(p=>/<main\b/.test(readFileSync(p,"utf8")))],
 ["sitemap includes each guide",["aiou-guess-paper","aiou-guess-papers-2026-matric-to-master","aiou-original-books","aiou-bed-15-25-4-solved-assignments","bs-solved-assignments-spring-2026-all"].every(s=>sitemap.includes(s))],
 ["robots file references sitemap",/Sitemap:\s*https:\/\/nationalistacademy\.github\.io\/Assignmentwaly\/sitemap\.xml/.test(readFileSync("robots.txt","utf8"))]
];
let failed=0;for(const [name,ok] of checks){console.log((ok?"PASS ":"FAIL ")+name);if(!ok)failed++}
if(failed)process.exit(1);console.log("Linked-pages smoke check passed.");
