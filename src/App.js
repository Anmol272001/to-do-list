import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'
import BottomBar from './Components/BottomBar';

import Input from './Components/Input';
import MobileBar from './Components/MobileBar';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';

function App() {

  //States 
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([{
    id: 1,
    value: "Hello 👋",
    done : false
  }]);
  const [taskDone, setTaskDone] = useState(0);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [dark, setDark] = useState(true);

  // Functions

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

  function filterHandler() {
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.done === true));
        break;
      case 'Active':
        setFilteredTodos(todos.filter(todo => todo.done === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function clearHandler() {
    setTodos(todos.filter(todo => todo.done === false))
  }

  function setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function getLocalStorage() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }  

  // Use EFFECTS -

  useEffect((
    getLocalStorage
  ),[])

  useEffect((
    checkItems
  ), [todos])
  

  useEffect(() => {
    filterHandler()
    setLocalStorage()
  }, [todos, status])
  

  return (
    <div className={dark === true ? "App dark-mode" : "App light-mode"}>
      <div className="Container">
        <Navbar setDark={setDark} dark={dark}/>
        <Input
          value={inputValue}
          setValue={setInputValue}
          submitHandler={submitHandler} />
        <TodoList
          setTodos = {setTodos}
          todos={todos}
          handleDelete={handleDelete}
          filteredTodos = {filteredTodos}
          toggleDone={toggleDone} />
        <BottomBar
          status = {status}
          setStatus={setStatus}
          clearHandler = {clearHandler}
          taskDone={taskDone} />
        <MobileBar
          status = {status}
          setStatus={setStatus} />
        {
          todos !==[] && <div className="bottom-text">Drag and drop to reorder list</div>
        }
        
      </div>
    </div>
  );
}

export default App;
