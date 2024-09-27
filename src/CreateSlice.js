import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    text:''
}

const slice =createSlice({
    name:'display',
    initialState,
    reducers:{
        settext:(state,action)=>{
            state.text=action.payload;
        },
        additem:(state)=>{
           state.items.push(state.text)
        }
    }
})

export const {settext,additem} = slice.actions;
export default slice.reducer;