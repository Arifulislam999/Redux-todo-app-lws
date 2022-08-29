import { COLORCHANGE, STATUS } from "./ActionType";
import { initialState } from "./inititalState";

export const reducerFilter = (state = initialState, action) => {
    switch (action.type) {
        case STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case COLORCHANGE:
            const { color, colorStatus } = action.payload;
            switch (colorStatus) {
                case "added":
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter((extistingColor) => extistingColor !== color),
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};
