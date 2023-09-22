import TodoItem from "./TodoItem";
import { useTodoContext } from "../TodoContext"; // Import the context


function TodoList({  handleCheck, handleEdit, handleDelete, editId }) {
    const {  todos  } = useTodoContext();

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