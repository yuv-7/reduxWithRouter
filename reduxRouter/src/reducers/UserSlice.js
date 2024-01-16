import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    users:[{id:1,userName:"gaurav",userEmail:"gaurav@gmail.com",userPassword:"1234"}]
}

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const user = {
                id:nanoid(),
                userName:action.payload.userName,
                userEmail:action.payload.userEmail,
                userPassword:action.payload.userPassword
            }
            state.users.push(user);
        },
        deleteUser:(state,action)=>{}
    }
});

export const {addUser,deleteUser} = UserSlice.actions;
export default UserSlice.reducer;

