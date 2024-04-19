import { getMovies, addMovie, delMovie } from "@/api/movie";

export default {
    state:{
        movies: [],
    },
    // 상태 관리?
    // 상태 데이터 변경할때마다 일어나도록 하는 (전역적으로 다룰 수 있도록!)
    mutations: {
        setMovies(state, movies){
        // state: 위에, commit을 통해 response 받은 값을 전달
            state.movies = movies;
            // state.movies에 response.data 값을 저장
        },
        addMovie(state, movie){
            // state.movies 안에 추가 (push)
            state.movies.push(movie);

        },
        removeMovie(state, no){
            state.movies = state.movies.filter((movie) => movie.no !== no);
        },
    },
    // 비동기처리
    actions:{
            // commit: vuex에서 비동기처리
        async fetchMovies({commit}){
            const response = await getMovies();
            // commit을 통해 response 받은 값을 전달
            commit("setMovies", response.data);
        },
                                // data를 받아야 함
        async insertMovie({commit}, data) {
            const response = await addMovie(data);
            // data를 전달
            commit("addMovie", response.data);
        },
        async deleteMovie({commit}, no) {
            await delMovie(no);
            commit("removeMovie", no);
        },
    },
}