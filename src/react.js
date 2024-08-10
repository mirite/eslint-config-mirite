import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import reactLint from "eslint-plugin-react/configs/recommended.js";

const compat = new FlatCompat();

export const react = [
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
			"react/jsx-no-target-blank": "off",
			"react/boolean-prop-naming": "warn",
			"react/button-has-type": "warn",
			"react/jsx-max-depth": ["warn", { max: 3 }],
			"react/jsx-no-useless-fragment": "warn",
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
