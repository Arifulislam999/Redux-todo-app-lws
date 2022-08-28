import { combineReducers } from "redux";
import { reducerFilter } from "../FilterFoter/Reducer";
import { reducer } from "./Reducer";

export const rootReducer = combineReducers({
    todo: reducer,
    filterReducer: reducerFilter,
});
