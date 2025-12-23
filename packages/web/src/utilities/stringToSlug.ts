import slugify from "slugify";

export function stringToSlug(string: string) {
	return string && string.length
		? slugify(string, {
				strict: true,
				lower: true,
			})
		: undefined;
}
