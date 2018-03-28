export const SET_CATEGORIES = `SET_CATEGORIES`;

export const categories = (state = {}, { type, payload = [] }) => {
    switch (type) {
        case SET_CATEGORIES:
            return {all : payload}
        default:
            return state;
    }
};
