import { parser } from "typescript-eslint";
import baseConfig from "../../eslint.config.js";

export default [
   ...baseConfig,
   {
      languageOptions: {
         parser: parser,
      },
   },
];
