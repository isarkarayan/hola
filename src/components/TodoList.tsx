import React, { useState, useEffect } from 'react';
import { Check, Trash2 } from 'lucide-react';
import clsx from 'clsx';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};

type Filter = 'all' | 'active' | 'completed';

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: crypto.randomUUID(),
      title: newTodo.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedPercentage = Math.round(
    (todos.filter(todo => todo.completed).length / todos.length) * 100
  ) || 0;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-8">
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${completedPercentage}%` }}
          />
        </div>
        <p className="text-center mt-2 text-sm text-gray-600">
          {completedPercentage}% completed
        </p>
      </div>

      <form onSubmit={addTodo} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </form>

      <div className="flex gap-2 mb-4">
        {(['all', 'active', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={clsx(
              'px-4 py-2 rounded-lg',
              filter === f
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            )}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={clsx(
                  'p-1 rounded-full',
                  todo.completed ? 'bg-green-500 text-white' : 'border-2'
                )}
              >
                <Check className="h-4 w-4" />
              </button>
              <span
                className={clsx(
                  'text-gray-800',
                  todo.completed && 'line-through text-gray-500'
                )}
              >
                {todo.title}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}