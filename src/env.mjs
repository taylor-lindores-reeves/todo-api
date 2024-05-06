import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/*
	 * Serverside Environment variables, not available on the client.
	 * Will throw if you access these variables on the client.
	 */
	server: {
		APP_ENV: z.enum(["development", "production"]),
		X_AUTH_TOKEN: z.string(),
	},
	client: {
		NEXT_PUBLIC_API_URL: z.string().url(),
	},
	runtimeEnv: {
		APP_ENV: process.env.APP_ENV,
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		X_AUTH_TOKEN: process.env.X_AUTH_TOKEN,
	},
});
