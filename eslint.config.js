// eslint.config.js

const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,

  {
    ignores: ["dist/*", ".expo/*", "node_modules/*"],
  },

  {
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      eqeqeq: "error",
      curly: "error",
    },
  },
]);
