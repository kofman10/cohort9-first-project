import { useTodoContext } from "../TodoContext"; 

const TodoItem = ({todo, handleCheck, handleEdit, handleDelete }) => {
    const { editId, setEditId, isInputFocused, setInputFocus } = useTodoContext();

    const handleInputFocus = () => {
      setInputFocus(true);
    };
    const handleSubmitEdit = () => {
      if (todo.title.trim() !== "") {
        setEditId(null);
        setInputFocus(false);
      }
    };
    return (
      <li className="todo" key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
          disabled={isInputFocused}
        />
        {editId === todo.id ? (
          <input type="text" value={todo.title} onChange={handleEdit}   onBlur={handleSubmitEdit}
          onFocus={handleInputFocus}
          />
        ) : (
          <span className={`todo-title ${todo.completed && "checked"}`}>
            {todo.title}
          </span>
        )}
        {editId === todo.id && todo.title !== "" ? (
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