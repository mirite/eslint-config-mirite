import { fixupPluginRules } from "@eslint/compat";
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";
import tseslint from "typescript-eslint";

export const general = [
	jsdoc.configs["flat/recommended-typescript"],
	{
		plugins: {
			jsdoc,
		},
		rules: {
			"jsdoc/tag-lines": "off",
			"jsdoc/check-template-names": "error",
			"jsdoc/require-template": "warn",
			"jsdoc/require-throws": "warn",
			"jsdoc/require-jsdoc": [
				"error",
				{
					require: {
						FunctionDeclaration: true,
						MethodDefinition: true,
						ClassDeclaration: true,
					},
				},
			],
		},
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,

	{
		plugins: { import: fixupPluginRules(importPlugin) },
		rules: {
			"import/no-cycle": "error",
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
			"import/order": [
				"warn",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			"@typescript-eslint/explicit-module-boundary-types": "warn", // Warn on missing return types on exported functions.
		},
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
		rules: {
			"no-console": ["warn", { allow: ["warn", "error", "info"] }], // Warn on console.log as it's usually a debugging tool.
			"no-unused-vars": "off", // Turn off the default no-unused-vars rule, TS uses its own version.
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/consistent-type-imports": "error",
			"no-shadow": "off", // Turn off the default no-shadow rule, TS uses its own version.
			"@typescript-eslint/no-shadow": "error",
		},
	},
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
