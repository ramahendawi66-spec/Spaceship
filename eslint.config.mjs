import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.js", "spec/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jasmine,
        HelpAlf: "readonly",
        StringCalculator: "readonly",
        alf: "writable",
        calculator: "writable"
      }
    },
    rules: {
      "no-unused-vars": "error",
      "eqeqeq": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "default-case": "error",
      "no-empty": "error",
      "no-unreachable": "error",
      "radix": "error",
      "curly": "error"
    }
  }
];