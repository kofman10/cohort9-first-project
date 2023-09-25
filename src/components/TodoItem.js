import { useTodoContext } from "../TodoContext"; 


const TodoItem = ({todo, handleCheck, handleEdit, handleDelete }) => {
    const { editId, setEditId, todos } = useTodoContext();

    const isEditing = (id) => id === editId;

    const canEdit = (id) => !isEditing(id) && !todos.find((todo) => todo.id === id).completed;
  
    const handleSubmitEdit = (id) => {
      const editedTodo = todos.find((todo) => todo.id === id);
      if (editedTodo.title.trim() === "") {
        // Don't allow empty string as a title
        return;
      }
      handleEdit(id);
      setEditId(null);
      if (editedTodo.completed) {
        // If a completed todo is edited, make it uncompleted
        handleCheck(id);
      }
    };

    return (
      <li className="todo" key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
        />
        {editId === todo.id ? (
          <input type="text" value={todo.title} onChange={handleEdit} />
        ) : (
          <span className={`todo-title ${todo.completed && "checked"}`}>
            {todo.title}
          </span>
        )}
        {editId === todo.id ? (
          <button onClick={() =>setEditId(null)}>✅</button>
        ) : (
          <button
            className="del-button"
            onClick={() =>setEditId(todo.id)}
            disabled={todo.completed}
          >
            ✏️
          </button>
        )}
        <button className="del-button" onClick={() => handleDelete(todo.id)}>
          🗑️
        </button>
      </li>
    );
  }

  export default TodoItem;