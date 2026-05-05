import { defineField, defineType } from "sanity";

export default defineType({
	title: "Post",
	name: "page-post",
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
			title: "Publish date",
			name: "publishDate",
			type: "date",
			validation: Rule => Rule.required(),
		}),

		defineField({
			title: "Title",
			name: "title",
			type: "string",
		}),

		defineField({
			title: "Content",
			name: "content",
			type: "customBlock",
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
			},
			fieldset: "urlStructure",
			group: "urlStructure",
			validation: Rule => Rule.required(),
		}),
	],

	orderings: [
		{
			title: 'Release Date, New',
			name: 'releaseDateDesc',
			by: [
				{field: 'publishDate', direction: 'desc'}
			]
		},
		{
			title: 'Release Date, Old',
			name: 'releaseDateAsc',
			by: [
				{field: 'publishDate', direction: 'asc'}
			]
		},
	],
});
