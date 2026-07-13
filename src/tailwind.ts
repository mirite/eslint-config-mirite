import path from "path";
import type { Linter } from "eslint";
import tailwindLint from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";
export const getTailwind = (configPath: string): Linter.Config[] =>
	defineConfig([
		{
			// @ts-expect-error TS2322 Types aren't compatible with exact object types
			extends: [tailwindcss.configs.recommended],
			// @ts-expect-error TS2322 Types aren't compatible with exact object types
			plugins: { tailwindcss },
			rules: {
				"tailwindcss/classnames-order": "off",
				"tailwindcss/no-custom-classname": [
					"warn",
					{
						callees: ["twMerge"],
					},
				],
			},
			settings: {
				tailwindcss: {
					callees: ["classnames", "clsx", "ctl", "twMerge"],
					config: path.isAbsolute(configPath)
						? configPath
						: path.resolve(configPath),
					cssFiles: [
						"**/*.css",
						"!**/node_modules",
						"!**/vendor",
						"!**/.*",
						"!**/dist",
						"!**/build",
					],
				},
			},
		},
	]);
