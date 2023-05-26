import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryInterceptor } from './interceptor';
import { getCharacters } from '../characters/api/get-characters/get-characters';
import { getMovies } from '../movies/api/get-movies/get-movies';
import { getQuotes } from '../quotes/api/get-quotes/get-quotes';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryInterceptor,
  endpoints: (build) => ({
    getCharacters: getCharacters(build),
    getMovies: getMovies(build),
    getQuotes: getQuotes(build),
  }),
});

export const { useGetCharactersQuery, useGetMoviesQuery, useGetQuotesQuery } = api;
