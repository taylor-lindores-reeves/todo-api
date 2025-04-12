import type { Todo } from "@todo/app/api/v1/todos/route";
import { env } from "@todo/env.mjs";

export async function deleteTodo(id: number): Promise<Todo> {
	const todo = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/v1/todos`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id }),
	});

	return todo.json();
}
