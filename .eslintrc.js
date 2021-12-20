module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"    
    // "prettier/@typescript-eslint",
    // "plugin:prettier/recommended",    
    //"plugin:vue/recommended",
    // "prettier/vue",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "arrow-parens": "off",
    "eol-last": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "off",
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      },
      "multiline": {
        "max": 2
      }
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        // "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    // 'vue/no-computed-properties-in-data': ['error'],
    // 'vue/no-deprecated-data-object-declaration': ['error'],
    // 'vue/no-deprecated-destroyed-lifecycle': ['error'],
    // 'vue/no-deprecated-events-api': ['error'],
    // 'vue/no-deprecated-filter': ['error'],
    // 'vue/no-deprecated-inline-template': ['error'],
    // 'vue/no-deprecated-props-default-this': ['error'],
    // 'vue/no-deprecated-router-link-tag-prop': ['error'],
    // 'vue/no-deprecated-scope-attribute': ['error'],
    // 'vue/no-deprecated-slot-attribute': ['error'],
    // 'vue/no-deprecated-v-bind-sync': ['error'],
    // 'vue/no-deprecated-v-on-number-modifiers': ['error'],
    // 'vue/no-deprecated-vue-config-keycodes': ['error'],
    // 'vue/no-empty-component-block': ['error'],
    // 'vue/no-template-target-blank': ['error'],
    // 'vue/no-undef-properties': ['error'],
    // 'vue/no-unused-refs': ['error'],
    // 'vue/no-use-computed-property-like-method': ['error'],
    // 'vue/no-v-text': ['error'],    
    // 'vue/padding-line-between-blocks': ['error', 'always'],
    // 'vue/require-explicit-emits': ['error'],
    // 'vue/v-for-delimiter-style': ['error', 'in'],
    // 'vue/valid-next-tick': ['error'],
    // Conflict with prettier
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
  "ignorePatterns": ["dist"],
}