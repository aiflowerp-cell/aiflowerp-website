/*
 * FILE: eslint.config.mjs
 * PURPOSE:
 * ESLint flat configuration file for linting and code style verification.
 *
 * RESPONSIBILITIES:
 * - Configure Next.js Core Web Vitals ESLint rules
 * - Define global ignore patterns for build artifacts and environments
 *
 * DEPENDENCIES:
 * - eslint/config (defineConfig, globalIgnores)
 * - eslint-config-next/core-web-vitals
 *
 * NOTES:
 * - Flat config format compatible with ESLint 9.
 */

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
