
const initialState = [{
    name: "",
    email: "",
    admin: false,
}]

function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'USER/SET_USER':
            return {
                ...state,
                user: action.payload
            };

        default:
            return state
    }
}

export default userReducer;
