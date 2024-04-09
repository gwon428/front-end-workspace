import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  }
  const minus = () => {
    setCounter(counter - 1);
  }

  // 변화되는 부분만 리로딩
  console.log("always");

  // 한 번만 불러오는 데이터 (메인에서 불러올 때!)
  // 1) 괄호 안이 함수 형태 2) [] : 변화되는 시점을 정하면 출력
  useEffect(() => {
    console.log("useEffect");
  }, []);

  // counter가 바뀌는 시점마다 출력되는 useEffect
  useEffect(() => {
    console.log("counter change");
  }, [counter]);
  return (
    <div>
      <h1>Total Clicks : {counter}</h1>
      <button onClick={plus}> PLUS </button>
      <button onClick={minus}> MINUS </button>
    </div>
  );
};

export default App;