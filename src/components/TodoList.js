import TodoItem from "./TodoItem";
import { useTodoContext } from "../TodoContext"; 


function TodoList({  handleCheck, handleEdit, handleDelete, filteredTodos}) {
    const {  todos  } = useTodoContext();

    return (
      <ul>
        {filteredTodos.length &&
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheck={handleCheck}
              handleEdit={handleEdit}
              handleDelete={handleDelete}    
            />
          ))}
      </ul>
    );
  }

  export default TodoList;