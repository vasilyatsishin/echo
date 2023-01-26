const initialState = {
    cookies: false
}

const mainReducer = (state = initialState, action) => {
switch (action.type) {
    case "SET_COOKIES":
        return{
            ...state,
            cookies: action.payload
        }
    default:
        return state
}
}

export default mainReducer