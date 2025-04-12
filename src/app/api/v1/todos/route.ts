import { env } from "@todo/env.mjs";
import { TypedNextResponse, route, routeOperation } from "next-rest-framework";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const todoSchema = z.object({
	id: z.number(),
	name: z.string(),
	completed: z.boolean(),
});

export type Todo = z.infer<typeof todoSchema>;

const MOCK_TODOS: Todo[] = [];

/* !------- CRUD operations for TODO -------! */
// API endpoint: /api/v1/todos

export const { GET, POST, DELETE, PUT } = route({
	// CREATE TODO
	createTodo: routeOperation({
		method: "POST",
	})
		.input({
			contentType: "application/json",
			body: z.object({
				name: z.string(),
			}),
		})
		.outputs([
			{
				status: 201,
				contentType: "application/json",
				body: z.string(),
			},
			{
				status: 401,
				contentType: "application/json",
				body: z.string(),
			},
		])
		.middleware((req) => {
			const requestHeaders = new Headers(req.headers);
			if (requestHeaders.get("x-authorization") !== env.X_AUTH_TOKEN) {
				return TypedNextResponse.json("Unauthorized", {
					status: 401,
				});
			}
		})
		.handler(async (req) => {
			const { name } = await req.json();

			MOCK_TODOS.push({
				id: MOCK_TODOS.length + 1,
				name,
				completed: false,
			});

			revalidatePath("/");

			return TypedNextResponse.json(`New TODO created: ${name}`, {
				status: 201,
			});
		}),

	// READ TODOS
	getTodos: routeOperation({
		method: "GET",
	})
		.outputs([
			{
				status: 200,
				contentType: "application/json",
				body: z.array(todoSchema),
			},
		])
		.handler(() => {
			return TypedNextResponse.json(MOCK_TODOS, {
				status: 200,
			});
		}),

	// UPDATE TODO
	updateTodo: routeOperation({
		method: "PUT",
	})
		.input({
			contentType: "application/json",
			body: z.object({
				id: z.number(),
				completed: z.boolean(),
			}),
		})
		.outputs([
			{
				status: 200,
				contentType: "application/json",
				body: z.string(),
			},
			{
				status: 401,
				contentType: "application/json",
				body: z.string(),
			},
			{
				status: 404,
				contentType: "application/json",
				body: z.string(),
			},
		])
		.middleware((req) => {
			const requestHeaders = new Headers(req.headers);
			if (requestHeaders.get("x-authorization") !== env.X_AUTH_TOKEN) {
				return TypedNextResponse.json("Unauthorized", {
					status: 401,
				});
			}
		})
		.handler(async (req) => {
			const { id, completed } = await req.json();

			const todoIndex = MOCK_TODOS.findIndex((todo) => todo.id === id);

			if (todoIndex === -1) {
				return TypedNextResponse.json("TODO not found", {
					status: 404,
				});
			}

			MOCK_TODOS[todoIndex] = {
				id,
				completed,
				name: MOCK_TODOS[todoIndex].name,
			};

			return TypedNextResponse.json(
				`Todo updated: ${MOCK_TODOS[todoIndex].name}`,
				{
					status: 200,
				},
			);
		}),

	// DELETE TODO
	deleteTodo: routeOperation({
		method: "DELETE",
	})
		.input({
			contentType: "application/json",
			body: z.object({
				id: z.number(),
			}),
		})
		.outputs([
			{
				status: 200,
				contentType: "application/json",
				body: z.string(),
			},
			{
				status: 401,
				contentType: "application/json",
				body: z.string(),
			},
			{
				status: 404,
				contentType: "application/json",
				body: z.string(),
			},
		])
		.middleware((req) => {
			const requestHeaders = new Headers(req.headers);
			if (requestHeaders.get("x-authorization") !== env.X_AUTH_TOKEN) {
				return TypedNextResponse.json("Unauthorized", {
					status: 401,
				});
			}
		})
		.handler(async (req) => {
			const { id } = await req.json();

			const todoIndex = MOCK_TODOS.findIndex((todo) => todo.id === id);

			if (todoIndex === -1) {
				return TypedNextResponse.json("TODO not found", {
					status: 404,
				});
			}

			const { name } = MOCK_TODOS[todoIndex];

			MOCK_TODOS.splice(todoIndex, 1);

			revalidatePath("/");

			return TypedNextResponse.json(`TODO deleted: ${name}`, {
				status: 200,
			});
		}),
});
