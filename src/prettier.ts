const plugins = ["prettier-plugin-packagejson", "prettier-plugin-jsdoc"];

export const prettier = {
	plugins,
	useTabs: true,
};

/**
 * Creates a Prettier formatting configuration for projects that use
 * TailwindCSS. This is necessary for the plugin to locate the TW configuration
 *
 * @example
 * 	import { prettierWithTW } from "@mirite/eslint-plugin-mirite";
 *
 * 	export default prettierWithTW("./src/app/globals.css");
 *
 * @param cssPath The path to the root stylesheet that imports Tailwind.
 * @returns The configuration for TW projects.
 */
export function prettierWithTW(cssPath:string) {
	return {
		...prettier,
		plugins: [...plugins, "prettier-plugin-tailwindcss"],
		tailwindFunctions: ["twMerge"],
		tailwindStylesheet: cssPath,
	};
}
