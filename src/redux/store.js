import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./reducers/filmReducer";

export const store = configureStore({
    reducer: {
        filmsReducer
    }
})