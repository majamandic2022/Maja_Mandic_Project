import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Movies: FC = () => {
  const { t } = useTranslation();

  return <h1>{t('movies')}</h1>;
};

export default Movies;
