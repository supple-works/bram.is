import { defineField, defineType } from "sanity";

export default defineType({
	title: "Payoff",
	name: "payoff",
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
			title: "Name",
			name: "name",
			type: "string",
			validation: Rule => Rule.required(),
		}),
	],
});
