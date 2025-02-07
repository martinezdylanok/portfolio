import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { describe, expect, it, test } from "vitest";

export default [
   {
      ignores: ["packages/client/", "packages/server/", "dist"],
   },
   {
      files: ["**/*.{ts,tsx,js,jsx}"],
      languageOptions: {
         ecmaVersion: 2020,
         globals: {
            ...globals.browser,
            ...globals.node,
            describe: "readonly",
            test: "readonly",
            expect: "readonly",
            it: "readonly",
         },
      },
      plugins: {
         "@typescript-eslint": tseslint,
         prettier: eslintPluginPrettier,
      },
      rules: {
         ...js.configs.recommended.rules,
         ...tseslint.configs.recommended.rules,
         "prettier/prettier": "error",
         "no-var": "error",
      },
   },
];
