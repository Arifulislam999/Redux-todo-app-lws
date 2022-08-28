import { STATUS } from "./ActionType";
import { initialState } from "./inititalState";

export const reducerFilter = (state = initialState, action) => {
    switch (action.type) {
        case STATUS:
            return {
                ...state,
                status: action.payload,
            };

        default:
            return state;
    }
};
