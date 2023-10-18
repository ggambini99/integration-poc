"use client";

import React, { useState, useEffect } from "react";
import { Pencil, Trash, Check } from "phosphor-react";
import { useTodoContext } from "../context/TodoContext";

interface ToDo {
  id: number;
  text: string;
  isEditing: boolean;
}

const List: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const todoContext = useTodoContext();

  useEffect(() => {
    todoContext.addTodo = (text: string) => {
      const newTodo: ToDo = {
        id: Date.now(),
        text: text,
        isEditing: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    };
  }, [todoContext]);

  const handleRemove = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdate = (id: number, text: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text, isEditing: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleEdit = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <ul className="max-w-lg mx-auto mt-8">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md ${
            todo.isEditing ? "dark:bg-gray-900" : ""
          }`}
        >
          <span className="dark:text-gray-200 flex-grow text-center">
            {todo.isEditing ? (
              <input
                value={todo.text}
                onChange={(e) => {
                  const newText = e.target.value;
                  const updatedTodos = todos.map((td) => {
                    if (td.id === todo.id) return { ...td, text: newText };
                    return td;
                  });
                  setTodos(updatedTodos);
                }}
                onBlur={(e) => handleUpdate(todo.id, e.target.value)}
                className="px-2 py-1 border rounded w-full bg-transparent dark:text-gray-200"
              />
            ) : (
              todo.text
            )}
          </span>
          <div className="flex flex-col items-end ml-4">
            {todo.isEditing ? (
              <Check
                className="cursor-pointer mb-2"
                onClick={() => handleUpdate(todo.id, todo.text)}
              />
            ) : (
              <>
                <Pencil
                  className="cursor-pointer mb-2"
                  onClick={() => handleEdit(todo.id)}
                />
                <Trash
                  className="cursor-pointer"
                  onClick={() => handleRemove(todo.id)}
                />
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
