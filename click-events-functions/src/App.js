import logo from './logo.svg';
import './App.css';
import User from './components/User';


function App() {
  function apple(){
    alert("hello-events")
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={User}>Click me</button>
      <button onClick={apple}>Click me again</button>
      
    </div>
  );
}

export default App;
