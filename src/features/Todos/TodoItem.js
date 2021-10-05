// Pure Component
export function TodoItem({ todo, onDelete }) {
  async function handleUpdateTodo() {
    await fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });

    todo.completed = !todo.completed;
  }
  return (
    <p>
      <input
        type="checkbox"
        id={`todo${todo.id}`}
        defaultChecked={todo.completed}
        onChange={handleUpdateTodo}
      />
      <label htmlFor={`todo${todo.id}`}>{todo.title}</label>
      <button onClick={() => onDelete(todo.id)}>Del</button>
    </p>
  );
}
