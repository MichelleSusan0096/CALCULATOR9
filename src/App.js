import React, { useState } from "react";
// import "./App.css"; // Note: We are keeping styles inline, so we won't use App.css

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      // It's still important to acknowledge the use of eval.
      // For a real app, use a dedicated math parser library.
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString()); 
    } catch {
      setInput("Error");
    }
  };

  // --- New Dark Mode Color Palette ---
  const PRIMARY_BG = "#282c34"; // Dark Slate Gray (Main background)
  const CARD_BG = "#383c44";    // Slightly Lighter Dark Gray (Calculator body)
  const DISPLAY_COLOR = "#ffffff"; // White (Text/Display)
  const NUMBER_COLOR = "#5c6270"; // Medium Gray (Number buttons)
  const OPERATOR_COLOR = "#ff9800"; // Vibrant Orange (Operator buttons)
  const EQUAL_COLOR = "#4caf50";    // Green (Equal button)
  const CLEAR_COLOR = "#f44336";    // Red (Clear button)
  const BUTTON_HOVER = "darken(10%)"; // Placeholder for a real hover effect

  const buttonStyle = {
    width: "40px",
    height: "40px",
    margin: "5px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    color: DISPLAY_COLOR,
    cursor: "pointer",
    transition: "background-color 0.1s",
  };
  // ------------------------------------

  return (
    <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        backgroundColor: PRIMARY_BG 
    }}>
      <div 
        style={{
          backgroundColor: CARD_BG,
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 style={{ color: DISPLAY_COLOR, marginBottom: "15px" }}>Sleek Calc</h2>

        {/* Display Input Field */}
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "calc(100% - 22px)", // Full width minus padding
            padding: "10px",
            marginBottom: "15px",
            fontSize: "24px",
            textAlign: "right",
            backgroundColor: "#22252b",
            color: DISPLAY_COLOR,
            border: "none",
            borderRadius: "5px",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        />

        {/* Button Grid */}
        <div>
          <button onClick={() => handleClick("7")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>7</button>
          <button onClick={() => handleClick("8")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>8</button>
          <button onClick={() => handleClick("9")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>9</button>
          <button onClick={() => handleClick("/")} style={{ ...buttonStyle, backgroundColor: OPERATOR_COLOR }}>/</button>
        </div>

        <div>
          <button onClick={() => handleClick("4")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>4</button>
          <button onClick={() => handleClick("5")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>5</button>
          <button onClick={() => handleClick("6")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>6</button>
          <button onClick={() => handleClick("*")} style={{ ...buttonStyle, backgroundColor: OPERATOR_COLOR }}>*</button>
        </div>

        <div>
          <button onClick={() => handleClick("1")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>1</button>
          <button onClick={() => handleClick("2")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>2</button>
          <button onClick={() => handleClick("3")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>3</button>
          <button onClick={() => handleClick("-")} style={{ ...buttonStyle, backgroundColor: OPERATOR_COLOR }}>-</button>
        </div>

        <div>
          <button onClick={handleClear} style={{ ...buttonStyle, backgroundColor: CLEAR_COLOR }}>C</button>
          <button onClick={() => handleClick("0")} style={{ ...buttonStyle, backgroundColor: NUMBER_COLOR }}>0</button>
          <button onClick={handleEqual} style={{ ...buttonStyle, backgroundColor: EQUAL_COLOR, fontWeight: "bold" }}>=</button>
          <button onClick={() => handleClick("+")} style={{ ...buttonStyle, backgroundColor: OPERATOR_COLOR }}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
