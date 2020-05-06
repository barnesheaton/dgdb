module.exports = {
    root: true,
    env: {
        "react-native/react-native": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    parser: "babel-eslint",
    plugins: [
        "react",
        "react-native",
        "prettier"
    ],
    rules: {
        'prettier/prettier': ['error', {
            singleQuote: true,
            semi: false
        }],
        "react-native/no-unused-styles": 2,
        "react-native/no-raw-text": 0,
        "react-native/split-platform-components": 2,
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/display-name": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    }
};