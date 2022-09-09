import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	router: {
    base: '/calculator-nuxt-app/'
  },
	modules: ["@nuxtjs/tailwindcss"],
	buildModules: ["@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			"League Spartan": true,		
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
