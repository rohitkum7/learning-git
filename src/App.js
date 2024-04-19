import React, { useState } from "react";
import "./Calculator.css"; // You can style your calculator using CSS
import { Display } from "./Display";
import { Button } from "./Button";

// CalculatorApp component
const CalculatorApp = () => {
  const [input, setInput] = useState(""); // State to hold input value

  // Function to handle button click
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to evaluate expression
  const evaluateExpression = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Function to clear input
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="+" onClick={handleButtonClick} />
        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />
        <Button value="C" onClick={clearInput} />
        <Button value="0" onClick={handleButtonClick} />
        <Button value="=" onClick={evaluateExpression} />
        <Button value="/" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default CalculatorApp;
