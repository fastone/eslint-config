module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
      'eslint:recommended',
      'airbnb/hooks',
      'airbnb-typescript',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',      
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:prettier/recommended',
      'plugin:import/recommended'
    ],
    // Specifying Parser
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: '.',
        project: ['./tsconfig.json', './tsconfig.node.json', './.eslintrc.cjs']
    },
    // Configuring third-party plugins
    plugins: [
      'react',
      'react-refresh',
      '@typescript-eslint'
    ],
    // Resolve imports
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json'
            }
        },
        react: {
            version: 'detect'
        }
    },
    rules: {
        'linebreak-style': 'off',
        // Configure prettier
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                endOfLine: 'lf',
                singleQuote: true,
                tabWidth: 2,
                indentStyle: 'space',
                useTabs: true,
                trailingComma: 'es5'
            }
        ],
        // Disallow the `any` type.
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false
                }
            }
        ],
        'react-hooks/exhaustive-deps': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        // Enforce the use of the shorthand syntax.
        'object-shorthand': 'error',
        'no-console': 'warn'
    }
};
