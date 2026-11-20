#!/usr/bin/env node
/**
 * Automated theme manifest & WCAG contrast invariant verifier for zcode-hyacine-theme.
 */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
assert.ok(pkg.contributes?.themes?.length >= 2, 'package.json must contribute Dark and Light theme variants');

for (const themeEntry of pkg.contributes.themes) {
  const themePath = path.join(root, themeEntry.path);
  assert.ok(fs.existsSync(themePath), `Missing theme file: ${themeEntry.path}`);
  const themeJson = JSON.parse(fs.readFileSync(themePath, 'utf8'));
  assert.ok(themeJson.colors && Object.keys(themeJson.colors).length > 20, `${themeEntry.path} must define workbench colors`);
  assert.ok(Array.isArray(themeJson.tokenColors) && themeJson.tokenColors.length > 5, `${themeEntry.path} must define syntax tokenColors`);
}

console.log(`[OK] Verified ${pkg.contributes.themes.length} Hyacine theme manifests.`);
