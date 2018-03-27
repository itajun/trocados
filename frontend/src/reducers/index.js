export default (state = {name: "Initial"}, action) => {
    switch (action.type) {
        case "POST_NAME":
            return { ...state, name: "posting", loading: true };
        case "POST_NAME_SUCCESS":
            return { ...state, name: action.payload, loading: false };
        default:
            return {};
    }
}