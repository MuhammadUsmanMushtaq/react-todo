import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleHandle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const descriptionHandle = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      title: title,
      description: description,
      done: false,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form className='form__todo' onSubmit={handleSubmit}>
      <h1 className='form__todo-title'>Register New Todo</h1>
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        id='txtTodoItemToAdd'
        className='form__input'
        value={title}
        required
        placeholder='Add a title...'
        onChange={titleHandle}
      />
      <label htmlFor='description'>Description</label>

      <input
        type='text'
        className='form__input'
        placeholder='Add description...'
        value={description}
        onChange={descriptionHandle}
      />
      <button type='submit' id='btnAddTodo' className='form__button-submit'>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
