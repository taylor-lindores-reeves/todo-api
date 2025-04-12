"use client";

import type { Todo } from '@todo/app/api/v1/todos/route';
import { Button } from '@todo/components/ui/button';
import { Checkbox } from '@todo/components/ui/checkbox';
import { deleteTodo } from '@todo/lib/delete-todo';
import { updateTodo } from '@todo/lib/update-todo';
import { useRouter } from "next/navigation";
import type * as React from 'react';

export function TodoItem({ todo }: { todo: Todo; }) {
  const router = useRouter();
  const onChange = async (checked: boolean) => {
    await updateTodo(todo.id, checked);
  };

  const onDelete = async () => {
    await deleteTodo(todo.id);
    router.refresh();
  };

  return (
    <div key={todo.id} className="flex items-center space-x-4">
      <Checkbox onCheckedChange={onChange} defaultChecked={todo.completed} />
      <label className="text-gray-700 dark:text-gray-400 font-medium flex-1" htmlFor="task1">
        {todo.name}
      </label>
      <Button onClick={onDelete} size="sm" variant="destructive">
        Delete
      </Button>
    </div>
  );
}
