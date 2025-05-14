import eslint from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import tseslint from "typescript-eslint";

export const general = [
	eslint.configs.recommended,
	perfectionist.configs["recommended-natural"],
	jsdoc.configs["flat/recommended-typescript"],
	{
		plugins: {
			jsdoc,
		},
		rules: {
			"jsdoc/check-template-names": "error",
			"jsdoc/require-jsdoc": [
				"error",
				{
					require: {
						ClassDeclaration: true,
						FunctionDeclaration: true,
						MethodDefinition: true,
					},
				},
			],
			"jsdoc/require-template": "warn",
			"jsdoc/require-throws": "warn",
			"jsdoc/tag-lines": "off",
		},
	},
	importPlugin.flatConfigs.recommended,
	{
		rules: {
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-cycle": "error",
			"import/no-duplicates": "error",
		},
		settings: {
			"import/resolver": {
				node: true,
				typescript: true,
			},
			"import/resolver-next": [createTypeScriptImportResolver({})],
		},
	},
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			ecmaVersion: 2024,
			globals: {
				...globals.node,
				...globals.browser,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
			sourceType: "module",
		},
		rules: {
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/explicit-module-boundary-types": "warn",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-shadow": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					ignoreRestSiblings: true,
					varsIgnorePattern: "^_",
				},
			],
			"no-console": ["warn", { allow: ["warn", "error", "info"] }], // Warn on console.log as it's usually a debugging tool.
			"no-shadow": "off", // Turn off the default no-shadow rule, TS uses its own version.
			"no-unused-vars": "off", // Turn off the default no-unused-vars rule, TS uses its own version.
		},
	},
	...tseslint.config({
		extends: [tseslint.configs.disableTypeChecked],
		files: ["**/*.js"],
		rules: {
			"@typescript-eslint/explicit-module-boundary-types": "off",
		},
	}),
	{
		ignores: [
			".tsup/**/*",
			".yarn/**/*",
			".next/**/*",
			"coverage/**/*",
			"dist/**/*",
			"playwright-report/**/*",
		],
	},
];
