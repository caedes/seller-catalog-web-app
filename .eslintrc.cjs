/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:testing-library/react",
    "plugin:security/recommended",
    "plugin:xss/recommended",
    "plugin:vitest/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
    },
  ],
  ignorePatterns: ["dist", "storybook-static", "coverage"],
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
