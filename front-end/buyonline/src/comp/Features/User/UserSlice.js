import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {  enter, fetchAllUsers, newUser } from "../../App/ProjectAPI";
const initialState ={
    arrUser:[],
    currentUser: {},
    status:"guest"
}

export const login = createAsyncThunk(
    'user/login',
    async({name, password},thunkAPI)=>{
        const res= await enter(name, password)
        return res
    },
)

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async(thunkAPI)=>{
        const res= await fetchAllUsers()
        return res
    }
)

export const addNewUser= createAsyncThunk(
   'user/newUser',
   async(user, thunkAPI)=>{
    const res= await newUser(user)
    return res
   } 
)
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        changeStatus: (state, action)=>{
            state.status=action.payload
        },
        clearCurrentUser: (state, action)=>{
            state.currentUser=""
        }
        
    },

    extraReducers: (builder)=>{
        builder
        .addCase(login.fulfilled, (state, {payload})=>{
            if (typeof payload=== 'object'){
                state.currentUser=payload
                console.log(state.currentUser)
                state.status='user'
                console.log(state.status)
            }
            else
                {state.status=payload
                    console.log(state.status)
                }
        })
        .addCase(addNewUser.fulfilled,(state,{payload})=>{
            state.currentUser=payload
            state.status="user"
        })
        .addCase(fetchUsers.fulfilled,(state,{payload})=>{
            state.arrUser=payload
        })
    }

})
export const {changeStatus,clearCurrentUser}=UserSlice.actions;
export default UserSlice.reducer
