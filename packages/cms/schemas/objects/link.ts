import { defineField, defineType } from "sanity";

export default defineType({
	title: "Link",
	name: "link",
	type: "object",
	fields: [
		defineField({
			title: "Label",
			name: "label",
			type: "string",
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: "Href",
			name: "href",
			type: "url",
			validation: Rule => Rule.required(),
		}),
	],
});
