import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const [todos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  async function handleAddTodo(e) {
    e.preventDefault();
    const todoText = e.target.children.todoText.value;

    const todo = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        title: todoText,
        completed: false,
      }),
    }).then((res) => res.json());

    setTodos([...todos, todo]);
    setShowModal(false);
  }

  function getModalFooter() {
    return (
      <>
        <button className="btn" onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button className="btn btn-primary" form="addTodoForm">
          Save
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Todos</h1>
      <button onClick={() => setShowModal(true)}>Add Todo</button>
      {todos?.map((one) => (
        <TodoItem key={one.id} todo={one} />
      ))}
      <Modal
        title="Test modal"
        footer={getModalFooter()}
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <form id="addTodoForm" onSubmit={handleAddTodo}>
          <p>What do you want to add to the list?</p>
          <input type="text" name="todoText" style={{ width: '100%' }} />
        </form>
      </Modal>
    </>
  );
}
