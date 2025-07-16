/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		browser: {
			instances: [
				{
					browser: "firefox",
					headless: true,
				},
			],
		},
		setupFiles: ["./src/setupTests.ts"],
	},
});
