import { useContext } from "react";
import CounterContext from "../Context/Context";

function Button() {
  const { value, setValue } = useContext(CounterContext);
  return <button onClick={(e) => setValue(value + 1)}>Aumentar</button>;
}

export default Button;
