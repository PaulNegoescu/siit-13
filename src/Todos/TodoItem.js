// Pure Component
export function TodoItem({ todo }) {
  return (
    <p>
      <input
        type="checkbox"
        id={`todo${todo.id}`}
        defaultChecked={todo.completed}
      />
      <label htmlFor={`todo${todo.id}`}>{todo.title}</label>
    </p>
  );
}
