import { createAction, handleActions } from "redux-actions";

// 액션(Action) : 프로젝트의 상태에 변화를 일으키는 것 [액션 타입을 정의한다!]
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수 (action creator) : 액션 객체를 만들어주는 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 리듀서(reducer) : 변화를 일으키는 함수 ({액션을 어떻게 다룰지 정의}, 초기값) 지정
const counter = handleActions(
    {
        [INCREASE]: (state, action) => state + 1,
        [DECREASE]: (state, action) => state - 1,
    },
    0
);
export default counter;