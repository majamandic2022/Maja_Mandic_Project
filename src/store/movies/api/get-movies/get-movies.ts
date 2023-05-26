import { stringify } from 'qs';

import { Movie, BuildType } from '../../../../shared/types';
import { PageableItems } from '../../../../shared/types/pageable-items.type';

const baseMoviesUrl = 'movie';
const limit = '5';

const getMoviesUrl = (offset: number, filter: { name?: string }) =>
  `${baseMoviesUrl}?offset=${offset}&limit=${limit}&${stringify(filter)}`;

export const getMovies = (build: BuildType) => {
  return build.query<PageableItems<Movie[]>, unknown>({
    query: ({ offset, query }: { offset: number; query: { name?: string } }) => ({
      url: getMoviesUrl(offset, query),
      method: 'GET',
    }),
  });
};
