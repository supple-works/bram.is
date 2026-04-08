import { defineConfig } from "@sugarcube-sh/cli";

export default defineConfig({
	transforms: {
		fluid: {
			min: 360,
			max: 1240,
		},
	},
	utilities: {
		color: {
			source: "color.*",
			prefix: "text",
		},
	},
});
