module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "import/resolver": {
            "node": {
            "paths": ["src"]
            }
        },
        },
    "rules": {
        "arrow-body-style": ["error", "as-needed"],
        "jsx-quotes": ["error", "prefer-double"],
        "no-duplicate-imports": ["error", { "includeExports": true }],
        "no-var": "error",
        "import/order": ["error", {"groups": ["builtin", "external", "internal", "unknown", "parent", "sibling", "index", "object"]}]
     }
};
