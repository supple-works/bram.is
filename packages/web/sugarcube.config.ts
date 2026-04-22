import { defineConfig } from "@sugarcube-sh/cli";

export default defineConfig({
	variables: {
		transforms: {
			fluid: {
				min: 360,
				max: 1240,
			},
		},
	},
	utilities: {
		classes: {
			color: {
				source: "color.*",
				prefix: "text",
			},
		},
	},
});
