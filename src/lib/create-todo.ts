import { env } from "@todo/env.mjs";

export async function createTodo(name: string): Promise<string> {
	const todo = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/v1/todos`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});

	return todo.json();
}
