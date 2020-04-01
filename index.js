module.exports = {
  "extends": "tslint:recommended",
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
    "indent": [
      true,
      "spaces",
      2
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
    "no-consecutive-blank-lines": false,
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
    "whitespace": [true, "check-module"],
    "align": [true, "parameters", "statements", "arguments", "members", "elements"],
    "interface-over-type-literal": false
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
