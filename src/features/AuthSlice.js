import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    LoggedIn : false
}

const authReducer = createSlice({
    name : 'Login',
    initialState,
    reducers:{
        updateLogIn : (state,action) => {
            state.LoggedIn = true 
        },
        updateLogOut : (state,action) => {
            state.LoggedIn = false
        }
    }
})

export const {updateLogIn,updateLogOut} = authReducer.actions

export default authReducer.reducer