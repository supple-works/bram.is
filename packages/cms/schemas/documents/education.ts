import { defineField, defineType } from "sanity";

export default defineType({
	title: "Education",
	name: "education",
	type: "document",
	initialValue: {
		language: "en",
	},
	preview: {
		select: {
			title: "title",
			subtitle: "institution",
		},
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

		defineField({
			title: "Institution",
			name: "institution",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Start date",
			name: "dateStart",
			type: "date",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "End date",
			name: "dateEnd",
			type: "date",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "City",
			name: "city",
			type: "string",
		}),

		defineField({
			title: "Country",
			name: "country",
			type: "string",
		}),

		defineField({
			title: "Content",
			name: "content",
			type: "customBlock",
		}),
	],
});
