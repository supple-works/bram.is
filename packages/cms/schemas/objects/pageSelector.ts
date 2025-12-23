import { defineField } from "sanity";
import { filterReference } from "../../utilities/filterReference";

export default defineField({
	title: "Page selector",
	name: "pageSelector",
	type: "reference",
	to: [{ type: "page-cv" }, { type: "page-discography" }, { type: "page-record" }],
	options: {
		filter: filterReference,
	},
});
