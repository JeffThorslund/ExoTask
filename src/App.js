import React from 'react';
import TaskBoard from './components/TaskBoard/TaskBoard'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskBoard />
      </header>
    </div>
  );
}

export default App;
