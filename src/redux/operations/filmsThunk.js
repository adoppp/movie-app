import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '3efc5f27e297293a312846134ed309a3';

export const getTrendingMovies = createAsyncThunk(
    'films/Trending',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/trending/movie/day?api_key=${KEY}`)
            return response.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getByQuery = createAsyncThunk(
    'films/Query',
    async (query, thunkAPI) => {
        try {
            const response = await axios.get(`/search/movie?api_key=${KEY}&query=${query}`);
            return response.data.results;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);