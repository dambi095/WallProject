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
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 0, 
        'semi':'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off', // 'React' was used before it was defined 오류 해결
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/prefer-default-export': 'off', // export default 필수 조건 제거 
        '@typescript-eslint/no-explicit-any': 'off',
        'react/no-unused-prop-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        'camelcase': 'off',
        'react/jsx-indent' : 'off',
        'react/jsx-indent-props':'off',
        'for-direction': 2, // fory 루프가 무한대로 실행되는 것을 방지
        'no-undef': 'off',
        'no-empty': 'off',
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-unreachable': 2,
        'react/jsx-key': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 'off',
        'react/jsx-uses-vars': 2,
        'react/no-children-prop': 2,
        'react/no-deprecated': 2, // react version 감지하여 deprecated 된 함수 경고
        'react/no-direct-mutation-state': 2, // state 를 직접 바꾸지 않게하기 위한 옵션
        'react/no-is-mounted': 2,
        'react/no-render-return-value': 2,
        'react/no-unknown-property': 2,
        'react/require-render-return': 2, 
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
