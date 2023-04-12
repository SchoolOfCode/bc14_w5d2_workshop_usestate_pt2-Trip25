import React from "react";

import "./App.css";
import Input from "../Input/index";
import Item from "../Item/index";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  
  function handleChange(event){
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h1>JSX will go here!</h1>

      <Input changeFunction={handleChange} />
      <Item text={text} />
    </div>
  );
}

export default App;
