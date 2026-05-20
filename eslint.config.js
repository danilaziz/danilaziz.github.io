import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist/**", "assets/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["app/src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": "off",
      "no-control-regex": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: ["*.config.js", "vite.config.js", "tailwind.config.js", "postcss.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node,
      sourceType: "module",
    },
  },
];