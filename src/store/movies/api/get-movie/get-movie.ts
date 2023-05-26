import { Movie, BuildType } from '../../../../shared/types';
import { PageableItems } from '../../../../shared/types/pageable-items.type';

const baseMovieUrl = 'movie';

const getMovieUrl = (id: string) => `${baseMovieUrl}/${id}`;

export const getMovie = (build: BuildType) => {
  return build.query<PageableItems<Movie>, unknown>({
    query: ({ query: { id } }: { query: { id: string } }) => ({
      url: getMovieUrl(id),
      method: 'GET',
    }),
  });
};
