import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    userName: string;
    email: string;
    password: string;

}

const initialState: IUser = {
    userName: "no login",
    email: "",
    password: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action ) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

