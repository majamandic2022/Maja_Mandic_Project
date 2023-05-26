import { stringify } from 'qs';

import { Character, BuildType } from '../../../../shared/types';
import { PageableItems } from '../../../../shared/types/pageable-items.type';

const baseCharactersUrl = 'character';
const limit = '5';

const getCharactersUrl = (offset: number, filter: { name?: string }) =>
  `${baseCharactersUrl}?offset=${offset}&limit=${limit}&${stringify(filter)}`;

export const getCharacters = (build: BuildType) => {
  return build.query<PageableItems<Character>, unknown>({
    query: ({ offset, query }: { offset: number; query: { name?: string } }) => ({
      url: getCharactersUrl(offset, query),
      method: 'GET',
    }),
  });
};
