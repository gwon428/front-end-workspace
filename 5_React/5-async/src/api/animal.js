// axios
import axios from "axios";

// react-query
import {useQuery} from "@tanstack/react-query";

export const getFetch = () => {
    return fetch("http://localhost:8080/api/animal").then((response) => {
        return response.json();
        // 한 번 더 후처리
    }).then(data => {
        return data;
    });
};

// async ~ await
// export const getAwait = async() => {
//     const response = await fetch("http://localhost:8080/api/animal");
//     console.log(response);
//     return response.json();
// };

// 비동기 => async await 세트를 붙여줘야 함.
export const getAxios = async() => {
    // get 방식일 때 get()
    const response = await axios.get("http://localhost:8080/api/animal");
    // axios가 제공하는 response는 구조가 다르기 때문에 response.data
    return response.data;
}

// react-query
export const useGetQuery = () => {
    return useQuery({
        // 가져오는 키 (?) 리스트 형태로 []로 감싸야 함.
        queryKey: ["animal"],
        // 어디서 가져올거냐
        queryFn: getAxios,
    });
};