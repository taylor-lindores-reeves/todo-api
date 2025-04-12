import { docsRoute } from "next-rest-framework";

export const dynamic = "force-dynamic";
export const { GET } = docsRoute({
	// deniedPaths: [...] // Ignore endpoints from the generated OpenAPI spec.
	// allowedPaths: [...], // Explicitly set which endpoints to include in the generated OpenAPI spec.
	openApiObject: {
		info: {
			version: "1.0.0",
			title: "Todo CRUD API",
			description: "API for managing todos.",
		},
	},
	openApiJsonPath: "/openapi.json",
	docsConfig: {
		provider: "redoc",
		title: "Todo CRUD API",
		description: "API for managing todos.",
	},
});
