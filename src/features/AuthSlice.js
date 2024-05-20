import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    LoggedIn : false
}

const authReducer = createSlice({
    name : 'Login',
    initialState,
    reducers:{
        updateLogIn : (state,action) => {
            state.LoggedIn = !state.LoggedIn 
        }    
    }
})

export const {updateLogIn} = authReducer.actions

export default authReducer.reducer