import { Quote, BuildType } from '../../../../shared/types';
import { PageableItems } from '../../../../shared/types/pageable-items.type';

const baseQuotesUrl = 'quote';

const getQuoteUrl = (id: string) => `${baseQuotesUrl}/${id}`;

export const getQuote = (build: BuildType) => {
  return build.query<PageableItems<Quote>, unknown>({
    query: ({ query: { id } }: { query: { id: string } }) => ({
      url: getQuoteUrl(id),
      method: 'GET',
    }),
  });
};
