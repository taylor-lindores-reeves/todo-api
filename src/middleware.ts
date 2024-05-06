import { env } from "@todo/env.mjs";
import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-authorization", env.X_AUTH_TOKEN);

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}
