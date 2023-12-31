'use client'

import {useState, useRef} from 'react'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import hindi from "simple-keyboard-layouts/build/layouts/hindi";

// const lay = layout
function Keypad() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
    keyboard.current?.setOptions({ layout: hindi })
  };

  return (
    <div className="App">
      <input 
      className='input'
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        // layout={hindi}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default Keypad