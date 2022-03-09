import logo from './logo.svg';
import './App.css';
import {Stopwatch} from "./components/stopwatch"
import { useState  } from "react"




function App() {

  const [show ,setshow] = useState(true)

  
  return (
    <div className="App">
      <h1>START TIME FOR 30 SECOND</h1>

      {show ?   <Stopwatch/> : ""}
     
    <button
      onClick={() => {
        setshow(show ? false : true)
      }}
    >

      {show ? "Stop" : "Restart"}
    </button>
    </div>
  );
}

export default App;
