import { useState, useEffect } from "react";
import Btn from "./Btn";

// const Btn = ({click, text}) => {
//   return <button onClick={click}>{text}</button>;
// }

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  }
  const minus = () => {
    setCounter(counter - 1);
  }

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("counter change");
  }, [counter]);
  return (
    <>
      <h1>Total Clicks : {counter}</h1>
      <Btn click={plus} text="PLUS"/>
      <Btn click={minus} text="MINUS"/>
    </>
  );
};

export default Counter;