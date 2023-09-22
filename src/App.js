import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import CreateTodoButton from './components/CreateTodoButton'
import { useTodoContext } from "./TodoContext";
import "./App.css";

function App() {
    const { todos, setTodos, editId, setEditId } = useTodoContext(); 
  
    useEffect(() => {
      let canceled = false;
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
          if (!canceled) {
            setTodos(data.slice(0, 10));
          }
        })
        .catch((err) => {
          console.error(err);
        });
  
      return () => (canceled = true);
    }, []);
  
    const handleCheck = (id) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    };
  
    const handleDelete = (id) => {
      const targetTodoIndex = todos.findIndex((todo) => todo.id === id);
      const newTodos = [...todos];
      newTodos.splice(targetTodoIndex, 1);
      setTodos(newTodos);
    };
  
    const handleEdit = (e) => {
      const newTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, title: e.target.value } : todo
      );
      setTodos(newTodos);
    };
  
    const addTodo = () => {
      const maxId = Math.max(...todos.map((todo) => todo.id));
      const newTodo = {
        completed: false,
        id: maxId + 1,
        title: "New Todo",
        userId: 1,
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    };
  
    return (
      <div className="App">
        <div className="todo-wrapper">
          <TodoList
            todos={todos}
            handleCheck={handleCheck}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            editId={editId}
          />
          <CreateTodoButton addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  export default App;