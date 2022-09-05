import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],
	buildModules: ["@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			"League Spartan": true,
			// or:
			// Lato: [100, 300],
			// Raleway: {
			//   wght: [100, 400],
			//   ital: [100]
			// },
		},
	},
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
		configPath: "tailwind.config.js",
		exposeConfig: false,	
		injectPosition: 0,
		viewer: true,
	},
});
