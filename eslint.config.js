import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";
import vitest from "@vitest/eslint-plugin";

export default [
   {
      ignores: ["dist"],
   },
   {
      files: ["**/*.{ts,tsx,js,jsx}"],
      languageOptions: {
         ecmaVersion: 2024,
         parser: tsParser,
         globals: {
            ...globals.browser,
            ...globals.node,
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
   {
      files: ["**/__tests__/**/*.{test,spec}.*"],
      plugins: {
         vitest: vitest,
      },
      languageOptions: {
         ecmaVersion: 2024,
         globals: {
            ...vitest.environments.env.globals,
         },
      },
      rules: {
         ...vitest.configs.recommended.rules,
      },
   },
];
