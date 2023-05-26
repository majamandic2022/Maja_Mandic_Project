import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryInterceptor } from './interceptor';
import { getBooks } from '../books/api/get-books/get-books';
import { getMovies } from '../movies/api/get-movies.ts/get-movies';
import { getQuotes } from '../quotes/api/get-quotes/get-quotes';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryInterceptor,
  endpoints: (build) => ({
    getBooks: getBooks(build),
    getMovies: getMovies(build),
    getQuotes: getQuotes(build),
  }),
});

export const { useGetBooksQuery, useGetMoviesQuery, useGetQuotesQuery } = api;
