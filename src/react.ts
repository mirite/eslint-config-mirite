import reactLint from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";

export const react = [
	{
		plugins: {
			"react-compiler": reactCompiler,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
	reactHooks.default.configs["recommended-latest"],
	{
		files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
		plugins: { react: reactLint },
		rules: {
			"react/boolean-prop-naming": "warn",
			"react/button-has-type": "warn",
			"react/jsx-handler-names": "warn",
			"react/jsx-max-depth": ["warn", { max: 4 }],
			"react/jsx-no-constructed-context-values": "warn",
			"react/jsx-no-leaked-render": "warn",
			"react/jsx-no-useless-fragment": "warn",
			"react/no-array-index-key": "warn",
			"react/no-unstable-nested-components": "warn",
			"react/no-unused-prop-types": "warn",
			"react/prefer-stateless-function": "warn",
			"react/react-in-jsx-scope": "off",
			"react/self-closing-comp": "warn",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
