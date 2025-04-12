import { TodoList } from '@todo/components/todo-list';
import { getTodos } from '@todo/lib/get-todos';
import React from 'react';

export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <TodoList todos={todos} />
    </main>
  );
}
