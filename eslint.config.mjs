import { configs as wdioConfig } from "eslint-plugin-wdio";

export default [
    {
        extends: [
            wdioConfig['flat/recommended'],
            // ...
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },

        env: {
            node: true,
            mocha: true,
        },
    }
];

