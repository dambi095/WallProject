module.exports = {
    env: {
		browser: true,
		es6: true,
	},
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'airbnb', // or airbnb-base
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': 0,
        "no-use-before-define": "off",
        '@typescript-eslint/no-use-before-define': 'off', // 'React' was used before it was defined 오류 해결
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': [
			'error',
			'ignorePackages',
			{ js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never' }
		],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};