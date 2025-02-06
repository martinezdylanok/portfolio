import { parser } from "typescript-eslint";
import baseConfig from "../eslint.config.js";
import globals from "globals";

export default [
   ...baseConfig,
   {
      files: ["**/*.{ts,tsx,js,jsx}"],
      languageOptions: {
         parser: parser,
         globals: globals.node,
      },
   },
];
