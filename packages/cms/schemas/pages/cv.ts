import { defineField, defineType } from "sanity";
import { filterReference } from "../../utilities/filterReference";
import { isUniqueSlug } from "../../utilities/isUniqueSlug";

async function isUnique(slug: any, context: any) {
	return await isUniqueSlug({ slug, context, type: "generic-page" });
}

export default defineType({
	title: "Curriculum Vitae",
	name: "page-cv",
	type: "document",
	fieldsets: [
		{
			name: "urlStructure",
			title: "URL structure",
		},
	],
	groups: [
		{
			name: "seo",
			title: "SEO",
		},
		{
			name: "urlStructure",
			title: "URL structure",
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
			name: "metaData",
			type: "metaData",
			group: "seo",
		}),

		defineField({
			title: "Intro",
			name: "intro",
			type: "customBlock",
		}),

		defineField({
			title: "Experience",
			name: "experience",
			type: "object",
			fields: [
				defineField({
					title: "Title",
					name: "title",
					type: "string",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "Items",
					name: "items",
					type: "array",
					validation: Rule => Rule.required(),
					of: [
						{
							type: "reference",
							to: [{ type: "experience" }],
							options: {
								filter: filterReference,
							},
						},
					],
				}),
			],
		}),

		defineField({
			title: "Skills",
			name: "skills",
			type: "object",
			fields: [
				defineField({
					title: "Title",
					name: "title",
					type: "string",
					validation: Rule => Rule.required(),
				}),

				defineField({
					title: "Content",
					name: "content",
					type: "customBlock",
				}),
			],
		}),

		defineField({
			title: "Personal info",
			name: "personal",
			type: "object",
			fields: [
				defineField({
					title: "Title",
					name: "title",
					type: "string",
					validation: Rule => Rule.required(),
				}),
			],
		}),

		defineField({
			title: "Education",
			name: "education",
			type: "object",
			fields: [
				defineField({
					title: "Title",
					name: "title",
					type: "string",
				}),

				defineField({
					title: "Items",
					name: "items",
					type: "array",
					of: [
						{
							type: "reference",
							to: [{ type: "education" }],
							options: {
								filter: filterReference,
							},
						},
					],
				}),
			],
		}),

		defineField({
			title: "Parent page",
			description: "Where in the hierachy does this page belong?",
			name: "parentPage",
			type: "pageSelector",
			fieldset: "urlStructure",
			group: "urlStructure",
		}),

		defineField({
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "metaData.title",
				isUnique,
			},
			fieldset: "urlStructure",
			group: "urlStructure",
			validation: Rule => Rule.required(),
		}),
	],
});
