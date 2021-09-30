import { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    console.log('Effect triggered');
    fetch('http://localhost:3001/todos?userId=1')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  console.log('render', todos);

  //   const renderedTodos = [];
  //   if (todos) {
  //     for (const todo of todos) {
  //       renderedTodos.push(
  //         <p key={todo.id}>
  //           <input
  //             type="checkbox"
  //             id={`todo${todo.id}`}
  //             defaultChecked={todo.completed}
  //           />
  //           <label htmlFor={`todo${todo.id}`}>{todo.title}</label>
  //         </p>
  //       );
  //     }
  //   }
  return (
    <>
      <h1>Todos</h1>
      {todos?.map((one) => (
        <TodoItem key={one.id} todo={one} />
      ))}
    </>
  );
}
