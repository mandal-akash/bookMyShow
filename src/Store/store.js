
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../Redux_Slices/movies_slices';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
