/* global __dirname, console */

const { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } = require("node:fs");
const { join, resolve } = require("node:path");
const { execFileSync } = require("node:child_process");
const { tmpdir } = require("node:os");

const repoUrl = "https://github.com/danilaziz/danilaziz.github.io.git";
const branch = "main";
const root = resolve(__dirname, "..");
const dist = join(root, "dist");
const deployDir = join(tmpdir(), `danilaziz-pages-${Date.now()}`);

function run(command, args, options = {}) {
  execFileSync(command, args, { stdio: "inherit", ...options });
}

if (!existsSync(dist)) {
  throw new Error("Folder dist tidak ditemukan. Jalankan npm run build dulu.");
}

mkdirSync(deployDir, { recursive: true });
run("git", ["clone", "--depth", "1", "--branch", branch, repoUrl, deployDir]);

for (const item of readdirSync(dist, { withFileTypes: true })) {
  const from = join(dist, item.name);
  const to = join(deployDir, item.name);
  if (item.isDirectory()) {
    rmSync(to, { recursive: true, force: true });
    cpSync(from, to, { recursive: true, force: true });
  } else {
    copyFileSync(from, to);
  }
}

writeFileSync(join(deployDir, ".nojekyll"), "");

run("git", ["add", "-f", "index.html", "404.html", "_headers", "favicon.svg", ".nojekyll", "assets"], { cwd: deployDir });

try {
  run("git", ["diff", "--cached", "--quiet"], { cwd: deployDir });
  console.log("Tidak ada perubahan untuk deploy.");
} catch {
  run("git", ["commit", "-m", "Deploy portfolio updates"], { cwd: deployDir });
  run("git", ["push", "origin", branch], { cwd: deployDir });
}
