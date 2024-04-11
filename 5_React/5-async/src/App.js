import { getFetch, getAwait, getAxios, useGetQuery } from "./api/animal";

// 라이프 사이클
import { useEffect, useState } from "react";


const App = () => {
  // 배열 형태이기 때문에 초기값을 빈 배열로 설정
  //const [data, setData] = useState([]);

  //const dataLoad = async() => {
//     getAwait().then(result => {
//       setData(result);
//       console.log(result);
//   });
  //  const result = await getAxios();
  //  setData(result);
//};

  // useEffect(() => {
  //   dataLoad();
  // }, []);

  // react-Query
  const {data, isLoading, isError} = useGetQuery();


  // loading이 true : 데이터가 아직 불러와지지 않은 경우
  // (로딩 화면 꾸미기 가능)
  if(isLoading) return <>Loading...</>;

  if(isError) return <>Error...........</>;

  return (
  <>
  {data?.map((animal) => 
    (<div key={animal.no}>{animal.name}</div>)
  )}
  </>
  );
};

export default App;