// src/features/movieSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://omdbapi.com/";
const API_KEY = "c3ab7c2d";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (content) => {
    try {
      const response = await axios.get(
        `${API_URL}?apikey=${API_KEY}&s=${content}`
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    series: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg === "movie") {
          state.movies = action.payload.Search?.filter((item) => item.Type === "movie") || [];
        } else if (action.meta.arg === "series") {
          state.series = action.payload.Search?.filter((item) => item.Type === "series") || [];
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
