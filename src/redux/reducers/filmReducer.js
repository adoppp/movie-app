import { createSlice } from "@reduxjs/toolkit"
import { getTrendingMovies } from "redux/operations/filmsThunk";

const initialState = {
    isLoading: false,
    error: null,
    items: [],
};

const PENDING = (state) => {
  state.isLoading = true;
  state.error = null;
};

const REJECTED = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getTrendingMovies.pending, PENDING)
        .addCase(getTrendingMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(getTrendingMovies.rejected, REJECTED)
    }
});

export const filmsReducer = filmsSlice.reducer;