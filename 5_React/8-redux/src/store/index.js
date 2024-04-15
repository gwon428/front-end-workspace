// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";

/*
const store = combineReducers({
    counter,
});
*/

const store = configureStore({
    reducer: {
        counter: counter.reducer
    }
})

export default store;