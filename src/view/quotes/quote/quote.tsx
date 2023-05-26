import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { useGetCharacterQuery, useGetMovieQuery, useGetQuoteQuery } from '../../../store/service';

import { QuoteContainer } from './quote.style';

const Quote: FC = () => {
  const params = useParams();
  const { t } = useTranslation();
  const { data: quoteData } = useGetQuoteQuery({ query: { id: params.id } });

  const { data: movieData } = useGetMovieQuery(
    { query: { id: quoteData?.docs[0].movie } },
    { skip: !quoteData?.docs[0].movie }
  );

  const { data: characterData } = useGetCharacterQuery(
    { query: { id: quoteData?.docs[0].character } },
    { skip: !quoteData?.docs[0].character }
  );

  const dialog = useMemo(() => {
    if (!quoteData || !quoteData.docs.length) {
      return '';
    }

    return quoteData.docs[0].dialog;
  }, [quoteData]);

  const characterName = useMemo(() => {
    if (!characterData || !characterData.docs.length) {
      return '';
    }

    return characterData.docs[0].name;
  }, [characterData]);

  const movieName = useMemo(() => {
    if (!movieData || !movieData.docs.length) {
      return '';
    }

    return movieData.docs[0].name;
  }, [movieData]);

  return (
    <QuoteContainer>
      <h2>{t('quote')}:</h2>
      <div>{dialog}</div>
      <h2>{t('movie')}:</h2>
      <div>{movieName}</div>
      <h2>{t('character')}:</h2>
      <div>{characterName}</div>
    </QuoteContainer>
  );
};

export default Quote;
