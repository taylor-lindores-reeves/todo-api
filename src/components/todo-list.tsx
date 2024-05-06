"use client";

import type { Todo } from "@todo/app/api/v1/todos/route";
import { TodoItem } from "@todo/components/todo-item";
import { Input } from "@todo/components/ui/input";
import { createTodo } from "@todo/lib/create-todo";
import { useRouter } from "next/navigation";

export function TodoList({ todos }: { todos: Todo[]; }) {
  const router = useRouter();
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = event.currentTarget; // Get the form element from the event
    const input = form.elements.namedItem('name') as HTMLInputElement; // Access the input directly if needed

    await createTodo(input.value);

    form.reset();
    router.refresh();
  };

  return (
    <div className="border bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Todo List</h1>
      <form onSubmit={onSubmit} className="mb-4">
        <Input
          name="name"
          className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
          type="text"
        />
      </form>
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
