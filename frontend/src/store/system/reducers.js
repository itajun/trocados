export const ADD_ERROR = "ADD_ERROR";
export const SET_ERRORS = "SET_ERRORS";

let nextErrorId = 0;

export const errors = (state = { all: [] }, { type, payload }) => {
    switch (type) {
        case ADD_ERROR:
            return {
                ...state,
                all: state.all.concat({
                    ...payload,
                    id: nextErrorId++
                })
            };
        case SET_ERRORS:
            return {
                ...state,
                all: payload
            };
        default:
            return state;
    }
};
