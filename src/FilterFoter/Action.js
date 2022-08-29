import { COLORCHANGE, STATUS } from "./ActionType";

export const Status = (status) => {
    return {
        type: STATUS,
        payload: status,
    };
};
export const ColorChange = (color, colorStatus) => {
    return {
        type: COLORCHANGE,
        payload: {
            color,
            colorStatus,
        },
    };
};
