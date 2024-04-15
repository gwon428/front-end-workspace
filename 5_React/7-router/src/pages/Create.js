import styled from "styled-components";
import { useState } from "react";
import { addAnimal } from "../api/Animal";
import {useNavigate} from "react-router-dom";

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px);

    *{
        margin-right: 5px;
        padding: 5px;
    }

    button{
        background-color: black;
        color: white;
        border-radius: 4px;
        border: 1px solid black;
        cursor: pointer;
    }
`;


const Create = () => {
    // 한 번 선언한 뒤에 변수에 넣을 수 있음
    const navigate = useNavigate();

    // JSON 형태이기 때문에 빈 {} 형태로 설정
    const [animal, setAnimal] = useState({});

    const add = async() => {
        await addAnimal(animal);
        navigate("/");
    };

    return (
        <Div>
        <input type="text" value={animal.name} placeholder="동물 이름 입력"
        onChange={(e) => setAnimal((prev) => ({...prev, name : e.target.value}))}/>

        <input type="number" value={animal.age} placeholder="동물 나이 입력"
        onChange={(e) => setAnimal((prev) => ({...prev, age: e.target.value}))}/>

        <button onClick={add}>동물 추가</button>
        </Div>
    );
};
export default Create;