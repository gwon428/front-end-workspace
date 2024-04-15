import { increase, decrease } from "./store/counter";
import { useDispatch } from "react-redux";

import Header from "./components/Header";

const App = () => {
  // 초기값 가져오기
  const dispatch = useDispatch();
  return (
   <>
      <Header />
      <button onClick={() => dispatch(increase())}>PLUS</button>
      <button onClick={() => dispatch(decrease())}>MINUS</button>
   </>
  );
}

export default App;