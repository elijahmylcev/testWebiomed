import { useState } from 'react';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import TodoList from './components/TodoList';

function App() {
  const [todoCollection, setTodoCollection] = useState([
    { id: 1, title: 'Learn JavaScript' },
    { id: 2, title: 'Complete Tasks' },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO List</h1>
        <AddTodoItem />
        <TodoList todoCollection={todoCollection} />
      </header>
    </div>
  );
}

export default App;
