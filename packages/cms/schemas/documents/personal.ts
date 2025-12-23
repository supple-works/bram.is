import { defineField, defineType } from "sanity";

export default defineType({
	title: "Personal Information",
	name: "personal",
	type: "document",
	fields: [
		defineField({
			title: "First name",
			name: "givenName",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Last name",
			name: "familyName",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Birth Date",
			name: "birthDate",
			type: "date",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Job title",
			name: "jobTitle",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "City",
			name: "city",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Email",
			name: "email",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Phone",
			name: "phone",
			type: "string",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Links",
			name: "links",
			type: "array",
			of: [
				{
					type: "link",
				},
			],
			validation: Rule => Rule.required(),
		}),
	],
});
