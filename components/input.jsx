import React, { useState } from "react";
import './input.css';

function Input({ prevOrder, setOrder }) {
  const [val, setVal] = useState("");

  function handleClick() {
    if (val) {
      setOrder([...prevOrder, val]);
      setVal(""); // Clear input field after adding the task
    }
  }

  return (
    <>  
      <div id="input">
        <input 
          type="text" 
          placeholder="Enter the task :" 
          value={val} 
          onChange={(e) => setVal(e.target.value)} 
        />
      </div>
      <div id="btn">
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}

export default Input;
