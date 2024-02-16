import React from 'react';

const TodoCard = ({ todo, handleDone, removeTodo }) => {
  return (
    <li
      className={
        todo.done
          ? 'todo__item todo--completed todo--toggle-completed'
          : 'todo__item'
      }
      key={todo.id}
      onClick={() => handleDone(todo)}
    >
      <p className='todo__item-title'>{todo.title}</p>
      <p className='todo__item-description'>{todo.description}</p>
      {todo.done ? (
        <button
          type='button'
          className='todo__button--remove'
          onClick={(e) => removeTodo(e, todo.id)}
        >
          Remove
        </button>
      ) : null}
    </li>
  );
};
export default TodoCard;
