const fs = require("fs");
const path = require("path");

const viteBinPath = path.join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "vite.cmd" : "vite"
);

try {
  if (!fs.existsSync(viteBinPath)) {
    return;
  }

  // On Windows, chmod is a no-op but harmless.
  const currentMode = fs.statSync(viteBinPath).mode & 0o777;
  const needsExecute = (currentMode & 0o111) === 0;

  if (needsExecute) {
    fs.chmodSync(viteBinPath, currentMode | 0o755);
    console.log("Adjusted execute permissions for Vite binary.");
  }
} catch (error) {
  console.warn("Unable to adjust Vite binary permissions:", error.message);
}

