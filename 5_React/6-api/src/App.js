import DaumPostCode from "./components/DaumPostCode";
import KakaoMap from "./components/KakaoMap";

const App = () => {
  return (
    <>
    <button onClick={DaumPostCode}>주소 검색</button>
    <KakaoMap/>
    </>
  );
}

export default App;
