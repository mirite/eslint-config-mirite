import path from "path";
import tailwindLint from "eslint-plugin-tailwindcss";

export const getTailwind = (configPath: string) => [
	...tailwindLint.configs["flat/recommended"],
	{
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
];
