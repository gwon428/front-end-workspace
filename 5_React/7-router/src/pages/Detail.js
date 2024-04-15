import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimal, updateAnimal } from "../api/Animal";
import { useEffect, useState } from "react";

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    *{
        margin-right: 5px;
        padding: 5px;
        border: 1.5px solid;
        border-radius: 4px;
        height: 35px;

    }

    button{
        background-color: black;
        color: white;
        border-radius: 4px;
        border: 1px solid black;
        cursor: pointer;
    }
`;

const Detail = () => {
    // 수정 시 초기 구조가 있어야 console 에러가 나지 않음.
    const [animal, setAnimal] = useState({name: "", age: 0});
    const navigate = useNavigate();
    const { no } = useParams();

    const animalAPI = async() => {
        const response = await getAnimal(no);
        setAnimal(response.data);
    }

    const update = async() => {
        await updateAnimal(animal);
        navigate("/");
    }

    useEffect(() => {
        animalAPI();
    }, []);

    return <Div>
    <input type="text" value={animal.name} 
        onChange={(e) => setAnimal((prev) => ({...prev, name: e.target.value}))}/>
    <input type="number" value={animal.age} 
        onChange={(e) => setAnimal((prev) => ({...prev, age: e.target.value}))}/>
    <button onClick={update}>정보 수정</button>
    </Div>;
};

export default Detail;