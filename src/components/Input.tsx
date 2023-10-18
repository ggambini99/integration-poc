"use client";

import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = () => {
    if (inputValue.trim() !== "" && addTodo) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex max-w-lg mx-auto p-4">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-grow px-2 py-1 border dark:bg-gray-800 dark:text-gray-200 rounded-l"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        Add
      </button>
    </div>
  );
};

export default Input;
