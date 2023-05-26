import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/slice';
import moviesReducer from './movies/slice';
import { api } from './service';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    books: booksReducer,
    movies: moviesReducer,
  },
  middleware: (gdm) => gdm().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
