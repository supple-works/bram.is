import { defineField, defineType } from "sanity";
import { filterReference } from "../../utilities/filterReference";

export default defineType({
	title: "Homepage",
	name: "page-home",
	type: "document",
	groups: [
		{
			name: "seo",
			title: "SEO",
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
			title: "Title",
			name: "title",
			type: "string",
		}),

		defineField({
			title: "Payoffs",
			name: "payoffs",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "payoff" }],
					options: {
						filter: filterReference,
					},
				},
			],
		}),
	],
});
