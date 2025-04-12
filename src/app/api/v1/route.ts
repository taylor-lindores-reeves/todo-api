import { docsRoute } from "next-rest-framework";

export const dynamic = "force-dynamic";

export const { GET } = docsRoute({
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
