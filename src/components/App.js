import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  
  const handleInputChange = (event) => {
    setInput(event.target.value);  
  }

 
  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);  
      setInput(''); 
    }
  }

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index); 
    setTasks(newTasks);  
  }

  return (
    <div>
      <div className="todo-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Todo</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
