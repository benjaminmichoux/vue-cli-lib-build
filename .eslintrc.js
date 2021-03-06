module.exports = {
	root: true,

	env: {
		node: true,
		browser: true
	},

	extends: ['plugin:vue/recommended', 'eslint:recommended'],

	rules: {
		['jsx-quotes']: ['error', 'prefer-double'],
		'comma-dangle': ['error', 'never'],
		semi: ['error', 'always'],
		'no-console': 'off',
		'no-debugger': 'off',
		'vue/no-v-html': 'off',
		'vue/no-use-v-if-with-v-for': 'off',
		'vue/require-default-prop': 'off',
		'vue/name-property-casing': ['error', 'kebab-case'],
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 1,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		]
	},

	parserOptions: {
		parser: 'babel-eslint'
	}
};
