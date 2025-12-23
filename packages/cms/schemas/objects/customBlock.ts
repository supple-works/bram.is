import { defineField, defineType } from "sanity";

export default defineType({
	title: "Content",
	name: "customBlock",
	type: "array",
	of: [
		{
			type: "block",
			marks: {
				annotations: [
					{
						name: "link",
						type: "object",
						title: "Link",
						validation: Rule =>
							Rule.custom((fields: any) =>
								fields?.pageReference || fields?.href
									? true
									: "A link needs to contain an \"Internal link\" or \"url\"",
							),
						fields: [
							defineField({
								title: "Internal link",
								name: "pageReference",
								type: "pageSelector",
								readOnly: ({ parent }) => !!parent?.href,
							}),
							defineField({
								title: "Url",
								name: "href",
								type: "url",
								readOnly: ({ parent }) => !!parent?.pageReference,
							}),
						],
					},
				],
			},
		},
	],
});
