import tailwindLint from "eslint-plugin-tailwindcss";

export const tailwind = [
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
				cssFiles: [
					"**/*.css",
					"!**/node_modules",
					"!**/vendor",
					"!**/.*",
					"!**/dist",
					"!**/build",
				],
				cssFilesRefreshRate: 5_000,
				removeDuplicates: true,
				skipClassAttribute: false,
				whitelist: [],
				tags: [],
				classRegex: "^class(Name)?$",
			},
		},
	},
];
