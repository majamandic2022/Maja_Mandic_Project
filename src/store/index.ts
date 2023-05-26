import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './characters/slice';
import moviesReducer from './movies/slice';
import quotesReducer from './quotes/slice';
import { api } from './service';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    characters: charactersReducer,
    movies: moviesReducer,
    quotes: quotesReducer,
  },
  middleware: (gdm) => gdm().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
