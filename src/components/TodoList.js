import TodoItem from "./TodoItem";

function TodoList({ todos, handleCheck, handleEdit, handleDelete, editId }) {
    return (
      <ul>
        {!!todos.length &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheck={handleCheck}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              editId={editId}
            />
          ))}
      </ul>
    );
  }

  export default TodoList;