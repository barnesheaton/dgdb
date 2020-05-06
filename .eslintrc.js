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
    }
};