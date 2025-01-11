import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import reactLint from "eslint-plugin-react/configs/recommended.js";
import reactCompiler from "eslint-plugin-react-compiler";

const compat = new FlatCompat();

export const react = [
	{
		plugins: {
			"react-compiler": reactCompiler,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
	...fixupConfigRules(
		...compat.config({
			extends: ["plugin:react-hooks/recommended"],
			plugins: ["react-hooks"],
		}),
	),

	...fixupConfigRules({
		...reactLint,
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/self-closing-comp": "warn",
			"react/jsx-no-leaked-render": "warn",
			"react/jsx-no-constructed-context-values": "warn",
			"react/jsx-handler-names": "warn",
			"react/boolean-prop-naming": "warn",
			"react/button-has-type": "warn",
			"react/jsx-max-depth": ["warn", { max: 4 }],
			"react/jsx-no-useless-fragment": "warn",
			"react/prefer-stateless-function": "warn",
			"react/no-array-index-key": "warn",
			"react/no-unstable-nested-components": "warn",
			"react/no-unused-prop-types": "warn",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
	}),
];
