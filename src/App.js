import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';

function App() {


  const todoList =  [
    {
      text: 'i will do this you know',
      done: false,
    },
    {
      text: 'i will do this you know 2',
      done: false,
    },
    {
      text: 'i will do this you know 3 ',
      done: false,
    },
  ];

  const clickFunction  = (value) => {
    console.log('value:',value);
    alert(`value click ${value}`, );
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
        
        <TodoList list={todoList} clickfunction={clickFunction} />
      </div>
    </div>
  );
}

export default App;
