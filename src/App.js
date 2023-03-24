import "./App.css";
import { React, useState } from "react";
import Textarea from "./components/Textarea";

function App() {
  const [count, setCount] = useState(4);

  // function decrementCount() {
  //   setCount(count - 1);
  // } OR the below declaration with use of Arrow function can also work
  const decrementCount = () => {
    setCount(count - 1);
  };

  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="App">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <Textarea heading="Enter text" />
    </>
  );
}

export default App;
