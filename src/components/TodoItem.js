

const TodoItem = ({ todo, handleCheck, handleEdit, handleDelete, editId }) => {
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
          <button onClick={() => handleEdit(null)}>✅</button>
        ) : (
          <button
            className="del-button"
            onClick={() => handleEdit(todo.id)}
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