import { stringify } from 'qs';

import { Quote, BuildType } from '../../../../shared/types';
import { PageableItems } from '../../../../shared/types/pageable-items.type';

const baseQuotesUrl = 'quote';
const limit = '5';

const getQuotesUrl = (offset: number, filter: { dialog?: string }) =>
  `${baseQuotesUrl}?offset=${offset}&limit=${limit}&${stringify(filter)}`;

export const getQuotes = (build: BuildType) => {
  return build.query<PageableItems<Quote>, unknown>({
    query: ({ offset, query }: { offset: number; query: { dialog?: string } }) => ({
      url: getQuotesUrl(offset, query),
      method: 'GET',
    }),
  });
};
