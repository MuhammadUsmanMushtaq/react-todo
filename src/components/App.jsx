import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const addTodo = (item) => {
    setTodos([...todos, item]);
  };

  const removeTodo = (e, id) => {
    e.stopPropagation();
    setTodos((todos) => todos.filter((item) => item.id !== id));
  };

  const handleDone = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} handleDone={handleDone} removeTodo={removeTodo} />
    </main>
  );
};

export default App;
