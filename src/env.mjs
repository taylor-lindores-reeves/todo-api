import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		X_AUTH_TOKEN: z.string(),
	},
	client: {
		NEXT_PUBLIC_API_URL: z.string().url(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		X_AUTH_TOKEN: process.env.X_AUTH_TOKEN,
	},
});
