import { STATUS } from "./ActionType";

export const Status = (status) => {
    return {
        type: STATUS,
        payload: status,
    };
};
