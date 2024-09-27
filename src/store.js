import { configureStore } from "@reduxjs/toolkit";
import Textreducer from './CreateSlice'

const store=configureStore({
    reducer:{
        text:Textreducer,
    }
})
export default store;