import { defineField, defineType } from "sanity";

export default defineType({
	title: "Settings",
	name: "settings",
	type: "document",
	groups: [
		{
			name: "seo",
			title: "SEO",
		},
		{
			name: "labels",
			title: "Generic labels",
		},
		{
			name: "personal",
			title: "Personal information",
		},
	],
	fields: [
		defineField({
			name: "language",
			type: "string",
			readOnly: true,
			hidden: true,
		}),

		defineField({
			title: "Site URL",
			name: "baseUrl",
			type: "string",
			validation: Rule => Rule.required(),
			group: "seo",
		}),

		defineField({
			title: "Page title suffix",
			name: "metaTitleSuffix",
			type: "string",
			validation: Rule => Rule.required(),
			group: "seo",
		}),

		defineField({
			title: "Social share image",
			name: "ogImage",
			description: "Fallback social share image, 1200x632, no SVG",
			type: "image",
			validation: Rule => Rule.required(),
			group: "seo",
		}),

		defineField({
			title: "Labels",
			name: "labels",
			type: "object",
			group: "labels",
			fields: [
				defineField({
					title: "Name",
					name: "name",
					type: "string",
					description: "eg. my `name` is",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "Date of birth",
					name: "dateOfBirth",
					type: "string",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "Location",
					name: "location",
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
					title: "Present",
					name: "present",
					type: "string",
					description: "eg. \"January 2024 - Present\"",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "A",
					name: "a",
					type: "string",
					description: "eg. `A` Front-end developer",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "From",
					name: "from",
					type: "string",
					description: "eg. `from` The Netherlands",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "I am",
					name: "iAm",
					type: "string",
					description: "eg. `I am` Bram Smulders",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "Salutation",
					name: "salutation",
					type: "string",
					description: "eg. `Hi,` I am Bram Smulders",
					validation: Rule => Rule.required(),
				}),
			],
		}),

		defineField({
			title: "Personal information",
			name: "personal",
			type: "object",
			group: "personal",
			fields: [
				defineField({
					title: "Country",
					name: "country",
					type: "string",
					validation: Rule => Rule.required(),
				}),
			],
		}),
	],
});
