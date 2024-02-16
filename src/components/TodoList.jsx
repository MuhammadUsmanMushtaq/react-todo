import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, handleDone, removeTodo }) => {
  return (
    <ul className='todo__items' id='todoList'>
      {todos
        .sort((a, b) => b.id - a.id)
        .map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            handleDone={handleDone}
            removeTodo={removeTodo}
          />
        ))}
      ;
    </ul>
  );
};

export default TodoList;
