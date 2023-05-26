import { stringify } from 'qs';

import { Book, BuildType } from '../../../../shared/types';
import { PageableItems } from '../../../../shared/types/pageable-items.type';

const baseBooksUrl = 'book';

const getBooksUrl = (offset: number, filter: { name?: string }) =>
  `${baseBooksUrl}?offset=${offset}&limit=10&${stringify(filter)}`;

export const getBooks = (build: BuildType) => {
  return build.query<PageableItems<Book[]>, unknown>({
    query: ({ offset, query }: { offset: number; query: { name?: string } }) => ({
      url: getBooksUrl(offset, query),
      method: 'GET',
    }),
  });
};
