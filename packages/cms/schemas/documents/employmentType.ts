import { defineField, defineType } from "sanity";

export default defineType({
	title: "Employment Type",
	name: "employmentType",
	type: "document",
	initialValue: {
		language: "en",
	},
	fields: [
		defineField({
			name: "language",
			type: "string",
			readOnly: true,
			hidden: true,
		}),

		defineField({
			title: "Title",
			name: "title",
			type: "string",
			validation: Rule => Rule.required(),
		}),
	],
});
