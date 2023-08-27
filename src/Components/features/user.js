import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'loginUser',
    initialState: {
        value: {
            email: "",
            password: ""
        }
    },
    reducers: {
        setLogin: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
