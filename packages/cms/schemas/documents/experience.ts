import { defineField, defineType } from "sanity";
import { filterReference } from "../../utilities/filterReference";

export default defineType({
	title: "Experience",
	name: "experience",
	type: "document",
	initialValue: {
		language: "en",
	},
	preview: {
		select: {
			title: "title",
			subtitle: "company",
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
			title: "Title/Role",
			name: "title",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Company",
			name: "company",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Employment type",
			name: "employmentType",
			type: "reference",
			validation: Rule => Rule.required(),
			to: [{ type: "employmentType" }],
			options: {
				disableNew: true,
				filter: filterReference,
			},
		}),

		defineField({
			title: "URL",
			name: "url",
			type: "url",
		}),

		defineField({
			title: "Image",
			name: "image",
			description: "1440x900",
			type: "image",
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
		}),

		defineField({
			title: "Content",
			name: "content",
			type: "customBlock",
		}),

		defineField({
			title: "Skills used",
			name: "skills",
			type: "array",
			validation: Rule => Rule.required(),
			of: [
				{
					type: "reference",
					to: [{ type: "skills" }],
				},
			],
		}),
	],
});
