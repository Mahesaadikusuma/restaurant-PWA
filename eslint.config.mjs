import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,

  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],

      "import/no-extraneous-dependencies": 0,
      "no-unused-vars": "error",
      "no-undef": "error",
      "import/no-extraneous-dependencies": 0,
      "no-console": 0,
      "no-underscore-dangle": 0,
      "no-restricted-globals": 0,
      "linebreak-style": 0,
    },
  },
];
