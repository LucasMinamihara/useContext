import React, { useState } from "react";
import Button from "./Components/button";
import CounterContext from "./Context/Context";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ value, setValue }}>
        <h1>Value principal: {value}</h1>
        <Button></Button>
        <h1>Valor dobro: {value * 2}</h1>
      </CounterContext.Provider>
    </>
  );
}

export default App;
