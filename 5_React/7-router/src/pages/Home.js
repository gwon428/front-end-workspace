import { getAnimals, delAnimal } from "../api/Animal";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
    width: 100%;

    th{
        font-weight: bold;
        padding: 10px;
    }

    td{
        padding: 10px;
        text-align: center;
        border-top: 1px dashed gray;
    }
`;

const Home = () => {
    const [animals, setAnimals] = useState([]);

    const animalAPI = async() => {
        const result = await getAnimals();
        console.log(result);
        setAnimals(result.data);
    };

    const onDelete = async(no) => {
        await delAnimal(no);
        // 삭제 후 다시 세팅 (받은 no와 같지 않은 번호들로 리스트를 다시 만들어서)
        setAnimals(animals.filter((animal) => animal.no !== no));
    }
    
    // 한 번 접속할 때 끌어오는 거
    useEffect(() => {
        animalAPI();
    }, []);

    return (
        <Table>
            <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
                <th>삭제</th>
            </tr>
            </thead>

            <tbody>
                {animals.map((animal) => 
                (
                    // 가장 상위에!! 이 경우 td가 아닌 tr에 넣음
                <tr key={animal.no}>
                    <td><a href={`/detail/${animal.no}`}>{animal.name}</a></td>
                    <td>{animal.age}</td>
                    <td><button onClick={() => onDelete(animal.no)}>삭제</button></td>
                </tr>
                ))}
            </tbody>
        </Table>
        )
};

export default Home;