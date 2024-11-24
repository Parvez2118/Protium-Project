import logo from './logo.svg';
import './App.css';

function App() {
  const createTask= ()=>{
    console.log("task");
  }
  return (
    <div className="App">
      <input type="text" placeholder='Enter Task...'></input>
      <button onClick={()=>createTask()}>Create</button>
    <h1>hello</h1>
    </div>
  );
}

export default App;
