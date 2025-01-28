import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.tsx";


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        // postSlice:null

    }
})