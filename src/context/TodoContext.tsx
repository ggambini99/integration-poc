"use client";

import React, { createContext, useContext, useRef } from "react";

interface TodoContextType {
  addTodo?: (text: string) => void;
}

const TodoContext = createContext<TodoContextType>({});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const addTodoRef = useRef<TodoContextType["addTodo"]>();

  return (
    <TodoContext.Provider value={{ addTodo: addTodoRef.current }}>
      {children}
    </TodoContext.Provider>
  );
};
