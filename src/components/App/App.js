import React from "react";
import "./App.css";
import Input from "../Input/index";
import Item from "../Item/index";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fonts, setFonts] = useState(["Impact", "Comic Sans", "Times New Roman", "Papyrus","Wingdings", "Ink Free", "Marlett"]);

  function handleChange(event){
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h1>Font Changer App</h1>

      <Input changeFunction={handleChange} />

      {/* Pass a different font prop to each Item */}
      <Item text={text} font={fonts[0]} />
      <Item text={text} font={fonts[1]} />
      <Item text={text} font={fonts[2]} />
      <Item text={text} font={fonts[3]} />
      <Item text={text} font={fonts[4]} />
      <Item text={text} font={fonts[5]} />
      <Item text={text} font={fonts[6]} />

    </div>
  );
}

export default App;