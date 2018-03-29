export const SET_CATEGORIES = `SET_CATEGORIES`;

export const categories = (state = { all: []}, { type, payload }) => {
    switch (type) {
        case SET_CATEGORIES:
            return { 
                ...state,
                all: payload 
            }
        default:
            return state;
    }
};
