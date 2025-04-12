"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { Todo } from "@todo/app/api/v1/todos/route";
import { TodoItem } from "@todo/components/todo-item";
import { Input } from "@todo/components/ui/input";
import { createTodo } from "@todo/lib/create-todo";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';

const createTodoSchema = z.object({
  name: z.string().min(1, { message: "Task name is required" }).max(50, { message: "Task name must be less than 55 characters" }),
});

type CreateTodoInputs = z.infer<typeof createTodoSchema>;

export function TodoList({ todos }: { todos: Todo[]; }) {
  const router = useRouter();

  const form = useForm<CreateTodoInputs>({
    resolver: zodResolver(createTodoSchema)
  });

  const onSubmit: SubmitHandler<CreateTodoInputs> = async (data) => {
    await createTodo(data.name);
    form.reset();
    router.refresh();
  };

  return (
    <div className="border bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Todo List</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4">
        <Input
          {...form.register("name")}
          className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 px-4 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
          type="text"
        />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm mt-2">{form.formState.errors.name.message}</p>
        )}
      </form>
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
