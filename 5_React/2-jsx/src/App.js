import { useState } from "react";


const App = () => {
  // 상태관리! [useState - hook]
  // [초기값이 들어갈 변수, 실행될 함수]
  const [counter, setCounter] = useState(0);  // 초기값 설정 0
  
  const setCount = () => {
    // setCounter : counter 값을 바꾸는 함수
    // counter = counter + 1;
    // useState는 렌더링도 포함됨
    setCounter(counter+1);
  }

  return (
    <div>
      <h1> Total Clicks : {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
}

export default App;
