import { ADDED, ALLCOMPLETETASK, CLEARCOMPLETED, COLOR, COMPLETETASK, DELETED, UNCOMPLETETASK, UPDATE } from "./ActionType";

export const Added = (text) => {
    return {
        type: ADDED,
        payload: text,
    };
};
export const Deleted = (id) => {
    return {
        type: DELETED,
        payload: id,
    };
};
export const CompleteTask = (id) => {
    return {
        type: COMPLETETASK,
        payload: id,
    };
};
export const allCompleteTask = () => {
    return {
        type: ALLCOMPLETETASK,
    };
};
export const unCompleteTask = () => {
    return {
        type: UNCOMPLETETASK,
    };
};
export const clearCompleted = (bool) => {
    return {
        type: CLEARCOMPLETED,
        payload: bool,
    };
};
export const Color = (todoId, color) => {
    return {
        type: COLOR,
        payload: {
            todoId,
            color,
        },
    };
};

export const Update = (id, value) => {
    return {
        type: UPDATE,
        payload: {
            id,
            value,
        },
    };
};
