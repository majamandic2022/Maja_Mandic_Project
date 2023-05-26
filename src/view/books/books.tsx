import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import DataTable from '../../components/data-table/data-table';
import { TableColumn } from '../../shared/types';
import { useGetBooksQuery } from '../../store/service';

const columns: TableColumn[] = [
  {
    field: '_id',
    header: 'id',
  },
  {
    field: 'name',
    header: 'name',
  },
];

const Books: FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{t('books')}</h1>
      <DataTable columns={columns} globalFilterKey="name" query={useGetBooksQuery} />
    </div>
  );
};

export default Books;
