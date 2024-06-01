import { useState } from 'react';
import List from '../components/List';
import Input from'../components/input'
import './App.css';

function App() {
  const [prevOrder, setOrder] = useState([]);

  return (
    <div>
      <div id="task-input">
        <Input prevOrder={prevOrder} setOrder={setOrder} />
      </div>
      <div id="list">
        <List prevOrder={prevOrder} />
      </div>
    </div>
  );
}

export default App;
