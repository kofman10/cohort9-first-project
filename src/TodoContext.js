import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [isInputFocused, setInputFocus] = useState(false);

  return (
    <TodoContext.Provider value={{ todos, setTodos, editId, setEditId, activeTab, setActiveTab, isInputFocused, setInputFocus }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
