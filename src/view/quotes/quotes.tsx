import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Quotes: FC = () => {
  const { t } = useTranslation();

  return <h1>{t('quotes')}</h1>;
};

export default Quotes;
