import { defineField, defineType } from "sanity";

export default defineType({
	title: "Skills",
	name: "skills",
	type: "document",
	fields: [
		defineField({
			title: "Name",
			name: "name",
			type: "string",
			validation: Rule => Rule.required(),
		}),
	],
});
