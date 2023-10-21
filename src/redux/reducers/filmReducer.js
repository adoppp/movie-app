import { createSlice } from "@reduxjs/toolkit"
import { getByQuery, getMovieActors, getMovieDetails, getTrendingMovies } from "redux/operations/filmsThunk";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  query: [],
  movieDetails: [],
  actors: [],
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
      .addCase(getMovieDetails.pending, PENDING)
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.movieDetails = action.payload;
      })
      .addCase(getMovieDetails.rejected, REJECTED)
      .addCase(getMovieActors.pending, PENDING)
      .addCase(getMovieActors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.actors = action.payload;
      })
      .addCase(getMovieActors.rejected, REJECTED)
    }
});

export const filmsReducer = filmsSlice.reducer;