import { cp, rm, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'web', 'dist');
const targetDir = path.join(root, 'server', 'public');

if (!existsSync(distDir)) {
  console.error('Build output missing at web/dist. Run npm run build:web first.');
  process.exit(1);
}

await rm(targetDir, { recursive: true, force: true });
await mkdir(targetDir, { recursive: true });
await cp(distDir, targetDir, { recursive: true });

console.log(`Copied ${distDir} to ${targetDir}.`);
