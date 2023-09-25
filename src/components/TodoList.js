import TodoItem from "./TodoItem";
import { useTodoContext } from "../TodoContext"; 


function TodoList({  handleCheck, handleEdit, handleDelete, filteredTodos}) {

    return (
      <ul>
        {filteredTodos.length ?
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheck={handleCheck}
              handleEdit={handleEdit}
              handleDelete={handleDelete}    
            />
          )): <p>No Todo Created yet</p>}
      </ul>
    );
  }

  export default TodoList;