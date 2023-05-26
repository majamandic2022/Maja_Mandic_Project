import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryInterceptor } from './interceptor';
import { getCharacter } from '../characters/api/get-character/get-character';
import { getCharacters } from '../characters/api/get-characters/get-characters';
import { getMovies } from '../movies/api/get-movies/get-movies';
import { getMovie } from '../movies/api/get-movie/get-movie';
import { getQuotes } from '../quotes/api/get-quotes/get-quotes';
import { getQuote } from '../quotes/api/get-quote/get-quoute';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryInterceptor,
  endpoints: (build) => ({
    getCharacter: getCharacter(build),
    getCharacters: getCharacters(build),
    getMovie: getMovie(build),
    getMovies: getMovies(build),
    getQuote: getQuote(build),
    getQuotes: getQuotes(build),
  }),
});

export const {
  useGetCharacterQuery,
  useGetCharactersQuery,
  useGetMovieQuery,
  useGetMoviesQuery,
  useGetQuoteQuery,
  useGetQuotesQuery,
} = api;
