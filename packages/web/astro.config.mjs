import process from "node:process";
import sanity from "@sanity/astro";
import sugarcube from "@sugarcube-sh/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET }
	= loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
	image: {
		// Example: Allow remote image optimization from a single domain
		domains: ["cdn.sanity.io"],
	},
	integrations: [
		sanity({
			projectId: SANITY_STUDIO_PROJECT_ID,
			dataset: SANITY_STUDIO_DATASET,
			// Set useCdn to false if you're building statically.
			useCdn: false,
		}),
	],
	vite: {
		server: {
			allowedHosts: ["brams-mac-mini.ratfish-polaris.ts.net"],
		},
		plugins: [
			sugarcube({
				unoOptions: {
					layers: {
						imports: 0,
						preflights: 1,
						global: 2,
						composition: 3,
						block: 4,
						shortcuts: 5,
						default: 6,
					},
					outputToCssLayers: {
						allLayers: true,
						cssLayerName: (layer) => {
							if (layer === "preflights")
								return "theme";
							if (layer === "default")
								return "utilities";
							return layer;
						},
					},
				},
			}),
		],
	},
});
