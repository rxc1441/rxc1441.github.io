// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,

  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "off" 
    }
  },

  {
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html
    },
    languageOptions: {
      parser: htmlParser
    },
    rules: {
      "@html-eslint/no-duplicate-attrs": "error",
      "@html-eslint/no-inline-styles": "off",
      "@html-eslint/require-li-container": "error",
      "@html-eslint/no-obsolete-tags": "error"
    }
  }
);
