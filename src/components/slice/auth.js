import { createSlice} from '@reduxjs/toolkit'

const initionalState = {
    isLoading : false,
    isAuth : false,
    user : null,
};

export const authSlice = createSlice({
    name : "auth",
    initialState : initionalState,
    reducers : {
        LoginUserStart: (state) => {},
        LoginUserSuccess: (state) => {},
        LoginUserFailure: (state) => {},
    },
});

export const {LoginUserStart, LoginUserSuccess, LoginUserFailure} = authSlice.actions;

export default authSlice.reducer;