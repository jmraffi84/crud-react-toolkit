import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}
export const userProfileListSlice = createSlice({
    name: 'userList',
    initialState: initialState,
    reducers: {
        allusers: (state, action) => {
            state.value = action.payload
        },
        addUsers: (state, action) => {
            state.value.push(action.payload);
        },
        updateUsers: (state, action) => {
            const { id, text } = action.payload;
            let usersToUpdate = state.value.find(user => user.id === id);
            if (usersToUpdate) {
                usersToUpdate.text = text;
            }
            // const usersToUpdate = state.value.filter(user => user.id !== action.value.id)
            // let updatedState = [...usersToUpdate, action.value];
            // return updatedState;


        },
        removeUsers: (state = initialState, action) => {
            let idToRemove = action.payload;

            state.value = state.value.filter(user => user.id !== idToRemove)

        }
    }
})

export const { allusers, addUsers, updateUsers, removeUsers } = userProfileListSlice.actions;
export default userProfileListSlice.reducer;
