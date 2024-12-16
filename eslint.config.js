import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
// export default [
//     { files: ['**/*.{js,mjs,cjs,ts}'] },
//     {
//         languageOptions: { globals: globals.browser },
//         rules: {
//             camelcase: 'error',
//             'comma-dangle': ['error', 'always-multiline'], // Enforce trailing commas in multiline
//             curly: ['error', 'all'], // Require curly braces for all control statements
//             'no-console': 'warn', // Warn about console.log usage
//             quotes: ['error', 'single'],
//         },
//     },
//     pluginJs.configs.recommended,
//     ...tseslint.configs.recommended,
//     eslintConfigPrettier,
// ]

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    eslintConfigPrettier, // Load first to avoid rule overrides
    {
        languageOptions: { globals: globals.browser },
        rules: {
            camelcase: 'error',
            'comma-dangle': ['error', 'always-multiline'],
            curly: ['error', 'all'],
            'no-console': 'warn',
            quotes: ['error', 'single'], // Enforce single quotes
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
]
