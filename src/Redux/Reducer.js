import { initialState } from "../Components/initialState";
import { ADDED, ALLCOMPLETETASK, CLEARCOMPLETED, COLOR, COMPLETETASK, DELETED, UNCOMPLETETASK, UPDATE } from "./ActionType";
const findId = (data) => {
    const maxId = data.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: findId(state),
                    text: action.payload,
                    completed: false,
                },
            ];
        case DELETED:
            return state.filter((data) => data.id !== action.payload);
        case COMPLETETASK:
            return state.map((data) => {
                // console.log(data.id, action.payload);
                if (data.id === action.payload) {
                    return {
                        ...data,
                        completed: !data.completed,
                    };
                } else {
                    return data;
                }
            });
        case ALLCOMPLETETASK:
            return state.map((data) => {
                // console.log(data.id, action.payload);
                if (data.completed === false) {
                    return {
                        ...data,
                        completed: !data.completed,
                    };
                } else {
                    return data;
                }
            });
        case UNCOMPLETETASK:
            return state.map((data) => {
                // console.log(data.id, action.payload);
                if (data.completed === true) {
                    return {
                        ...data,
                        completed: !data.completed,
                    };
                } else {
                    return data;
                }
            });
        case COLOR:
            const { todoId, color } = action.payload;
            return state.map((data) => {
                if (data.id !== todoId) {
                    return data;
                } else {
                    return {
                        ...data,
                        color: color,
                    };
                }
            });
        case CLEARCOMPLETED:
            return state.filter((data) => data.completed === false);
        case UPDATE:
            const { id, value } = action.payload;
            // console.log(value);
            return state.map((data) => {
                if (data.id === id) {
                    return { ...data, text: value };
                } else {
                    return data;
                }
            });
        default:
            return state;
    }
};
