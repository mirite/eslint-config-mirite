import path from "node:path";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();
const __dirname = path.resolve();

export const tailwind = [...compat.config({
	plugins: ["eslint-plugin-tailwindcss"],
	extends: ["plugin:tailwindcss/recommended"],
	rules: {
		"tailwindcss/classnames-order": "off",
		"tailwindcss/no-custom-classname": [
			"warn",
			{
				callees: ["twMerge"],
				config: path.resolve(__dirname, "./tailwind.config.ts"),
				cssFiles: ["**/*.css"],
			},
		],
	},
	settings: {
		tailwindcss: {
			callees: ["twMerge"],
			config: path.resolve(__dirname, "./tailwind.config.ts"),
			cssFiles: ["**/*.css", "!**/node_modules"],
			cssFilesRefreshRate: 5_000,
			removeDuplicates: true,
			skipClassAttribute: false,
			whitelist: [],
			tags: [],
			classRegex: "^class(Name)?$",
		},
	}
})]
