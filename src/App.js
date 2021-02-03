import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'

import Input from './Components/Input';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [taskDone, setTaskDone] = useState(0);

  function submitHandler(e) {
    e.preventDefault();
    if (inputValue === " ") {
      return
    }
    setTodos([...todos, {id:uuid(), value: inputValue, done:false}]);
    setInputValue('');
  }


  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function checkItems(){
    setTaskDone(todos.filter((todo) => todo.done === false).length);    
  }

  function toggleDone(todo) {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, done: !item.done
        }
      }
      return item;
    }))
  }

  useEffect((
    checkItems
  ),[todos])

  return (
    <div className="App">
      <div className="Container">
        <Navbar />
        <Input
          value={inputValue}
          setValue={setInputValue}
          submitHandler={submitHandler} />
        <TodoList
          setTodos = {setTodos}
          todos={todos}
          handleDelete={handleDelete}
          taskDone={taskDone}
          toggleDone ={toggleDone} />
      </div>
    </div>
  );
}

export default App;
