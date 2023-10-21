import { createSlice } from "@reduxjs/toolkit"
import { getByQuery, getTrendingMovies } from "redux/operations/filmsThunk";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  query: [],
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
        .addCase(getByQuery.pending, PENDING)
        .addCase(getByQuery.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.query = action.payload;
        })
      .addCase(getByQuery.rejected, REJECTED)
    }
});

export const filmsReducer = filmsSlice.reducer;