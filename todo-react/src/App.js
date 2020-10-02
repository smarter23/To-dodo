import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Make breakfest'
    }
  ]);

  const [newTodo, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodo) {
      const newTodos = [...todos, { title: newTodo, id: todos.length + 1 }];
      setTodos(newTodos);
      setTodoText('');
    }
  };

  const handleRemove = (todo) => {
    console.log(todo);

    let currentTodos = [...todos];

    setTodos(currentTodos.filter((todoItem) => todoItem.id !== todo.id));
  };
  return (
    <div className="App">
      <div>
        <label htmlFor="todo">What to do next ? : </label>
        <input type="text" value={newTodo} onChange={(e) => setTodoText(e.target.value)} />
        <button type="button" onClick={handleAddTodo} disabled={!newTodo} >
          Add todo
        </button>
      </div>

      <TodoList todos={todos} onRemove={handleRemove} />
    </div>
  );
}

export default App;
