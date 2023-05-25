import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Books: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('books')}</h1>
      <a href="/books/1">GO TO BOOK 1</a>
    </div>
  );
};

export default Books;
