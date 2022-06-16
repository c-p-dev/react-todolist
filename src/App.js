import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';

function App() {

  const todoList =  [
    {
      text: 'wash dishes',
      done: false,
    },
    {
      text: 'study',
      done: false,
    },
    {
      text: 'finish react coding interview',
      done: true,
    },
    {
      text: 'do design ',
      done: true,
    },
    {
      text: 'jogging',
      done: false,
    },
    {
      text: 'cooking ',
      done: true,
    },
    {
      text: 'netflix ',
      done: false,
    },
    {
      text: 'eating ',
      done: true,
    },
  ];

  const clickFunction  = (item, event) => {
    console.log('item:',item);
    console.log('event', event);
    alert(`clickFunction click ${item.text}` );
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TodoList
        </p>
      </header>
      <div className="container">
        <div className="header-text">
          <h1>Todo Component Demo</h1>  
        </div>
        
        <TodoList items={todoList} onItemClick={clickFunction} />
      </div>
    </div>
  );
}

export default App;
