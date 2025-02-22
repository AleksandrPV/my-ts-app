
const initialState = {
    activeUser: {
        "username": "",
        "email": "",
        "password": ""
    }
}

function userRegistrationReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'USER/SET_USER':
            return {
                ...state,
                activeUser: action.payload
            };

        default:
            return state
    }
}

export default userRegistrationReducer;
