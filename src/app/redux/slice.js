import { createSlice, nanoid, current, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    // userData: []
    userData: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [],
    userApiData: [],
    isLoading: true
}

export const fetchApiUser = createAsyncThunk('fetchApiUser', async () => {
    console.log("action")
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await res.json();
    return result;
})

const Slice = createSlice({
    name: 'adduser',
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log("action: ", action.payload);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.userData.push(data)
            // console.log(current(state.userData));
            let users = JSON.stringify(current(state.userData));
            localStorage.setItem('users', users);
        } ,
        removeUser: (state, action) => {
            console.log('removeAction',action);
            const data = state.userData.filter((item) => item.id !== action.payload);
            state.userData = data;
            localStorage.removeItem('users');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUser.fulfilled, (state, action) => {
            console.log("reducer::", action.payload);
            state.isLoading = false,
            state.userApiData = action.payload
        })
    }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;