import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import TableView from '../../components/table-view/table-view';
import { TableColumnType } from '../../shared/types';

const columns: TableColumnType[] = [
  {
    field: 'title',
    header: 'title',
  },
  {
    field: 'author',
    header: 'author',
  },
];

const Books: FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{t('books')}</h1>
      <TableView columns={columns} />
      <a href="/books/1">GO TO BOOK 1</a>
    </div>
  );
};

export default Books;
