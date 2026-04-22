import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import deskStructure from "./deskStructure";
import { studioDataSet, studioProjectID } from "./environment";
import { languages } from "./languages";
import { schemaTypes } from "./schemas";

export default defineConfig({
	name: "default",
	title: "bram.is homepage",

	projectId: studioProjectID,
	dataset: studioDataSet,

	plugins: [
		deskTool({
			structure: deskStructure,
		}),
		visionTool(),
		documentInternationalization({
			// Required configuration
			supportedLanguages: languages,
			schemaTypes: [
				"settings",
				"experience",
				"education",
				"employmentType",
				"page-home",
				"page-cv",
				"payoff",
			],
			weakReferences: true,
		}),
	],

	schema: {
		types: schemaTypes,
	},
});
