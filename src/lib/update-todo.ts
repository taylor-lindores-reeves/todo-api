import type { Todo } from "@todo/app/api/v1/todos/route";
import { env } from "@todo/env.mjs";

export async function updateTodo(
	id: number,
	completed: boolean,
): Promise<Todo> {
	const todo = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/v1/todos`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id, completed }),
	});

	return todo.json();
}
