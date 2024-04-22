import Header from "../components/Header";
import styled from "styled-components";
import { getMovies, deleteMovie } from "../api/movie";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  width: 900px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  input {
    width: 100%;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    margin: 5px;
    cursor: pointer;
    color: white;
    background-color: black;
    font-weight: bold;
    padding: 10px;
  }
  td{
    padding-top: 20px;
  }
`;

const Home = () => {
    const [movies, setMovies] = useState([]);

    const moviesAPI = async() => {
        const result = await getMovies();
        setMovies(result.data);
    }

    const onDelete = async(no) => {
        await deleteMovie(no);
        moviesAPI();
    }

    useEffect(() => {
        moviesAPI();
    }, []);

    return (<StyledDiv>
    <Header/>
    <h1>영화 목록</h1>
    <table>
        <thead>
            <th>제목</th>
            <th>장르</th>
            <th>영화배우</th>
            <th>삭제</th>
        </thead>
        <tbody>
            {movies.map((movie) => (
                <tr key={movie.no}>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.actor}</td>
                    <td><button onClick={() => onDelete(movie.no)}>삭제</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    </StyledDiv>);
};

export default Home;