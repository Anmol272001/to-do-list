import React,{useState} from 'react';
import Input from './Components/Input';

import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  return (
    <div className="App">
      <div className="Container">
        <Navbar />
        <Input
          value={inputValue}
          setValue={setInputValue}
          submitHandler={submitHandler} />
        <TodoList
          todos={todos} />
      </div>
    </div>
  );
}

export default App;
