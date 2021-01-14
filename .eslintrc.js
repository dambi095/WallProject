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
        'semi':'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off', // 'React' was used before it was defined 오류 해결
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/prefer-default-export': 'off', // export default 필수 조건 제거 
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