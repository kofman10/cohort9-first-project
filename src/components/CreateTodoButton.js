function CreateTodoButton({ addTodo }) {
    return (
      <div>
        <button onClick={addTodo}>create todo</button>
      </div>
    );
  }

  export default CreateTodoButton;