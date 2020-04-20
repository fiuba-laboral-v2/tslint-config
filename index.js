module.exports = {
  "extends": [
    "tslint:recommended",
    "tslint-eslint-rules"
  ],
  "rules": {
    "max-line-length": {
      "options": [
        100
      ]
    },
    "only-arrow-functions": true,
    "arrow-parens": [
      true,
      "ban-single-arg-parens"
    ],
    "semicolon": [
      true,
      "always"
    ],
    "forin": true,
    "curly": [
      true,
      "ignore-same-line"
    ],
    "comment-format": [
      true,
      "check-space"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "no-trailing-whitespace": true,
    "no-unused-expression": true,
    "no-var-keyword": true,
    "no-var-requires": false,
    "no-require-imports": true,
    "quotemark": [
      true,
      "double"
    ],
    "jsx-wrap-multiline": false,
    "no-debugger": false,
    "ordered-imports": [
      false
    ],
    "object-literal-sort-keys": [
      false
    ],
    "new-parens": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": true,
    "trailing-comma": [
      true,
      {
        "singleline": "never",
        "multiline": {
          "objects": "never",
          "arrays": "never",
          "functions": "never",
          "typeLiterals": "ignore"
        }
      }
    ],
    "object-literal-shorthand": false,
    "align": [true, "parameters", "statements", "arguments", "members", "elements"],
    "interface-over-type-literal": false,
    "eofline": true,
    "space-within-parens": true,
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "one-line": [
      true,
      "check-catch",
      "check-finally",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "object-curly-spacing": true,
    "array-bracket-spacing": [ true, "never" ],
    "no-multi-spaces": "error",
    "ter-indent": [true, 2]
  },
  "jsRules": {
    "max-line-length": {
      "options": [
        100
      ]
    }
  },
  "defaultSeverity": "error",
  "linterOptions": {
    "exclude": [
      "node_modules/**/*.ts",
      "dist/**/*.js",
      "config/**/*.js"
    ]
  },
  "rulesDirectory": [],
  "no-unused-variable": [true, {"ignore-pattern": "^_"}]
};
