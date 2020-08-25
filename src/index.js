import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const calButtons = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
    calButtons.push(
      <button
        onClick={b => {
          setInput(input + b.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calButtons}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={b=> setInput(input + b.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={b => setInput(input + b.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={b => setInput(input + b.target.value)} value="*">
          {" "}
          x
        </button>

        <button onClick={b => setInput(input + b.target.value)} value="/">
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={b => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (b) {
              console.log(b);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
