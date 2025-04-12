import type { Todo } from "@todo/app/api/v1/todos/route";
import { env } from "@todo/env.mjs";

export async function getTodos(): Promise<Todo[]> {
	const todos = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/v1/todos`);

	if (!todos.ok) throw new Error("Failed to fetch todos");

	return todos.json();
}
