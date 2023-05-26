import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import DataTable from '../../components/data-table/data-table';
import { TableColumn } from '../../shared/types';
import { useGetQuotesQuery } from '../../store/service';

const columns: TableColumn[] = [
  {
    field: 'id',
    header: 'id',
  },
  {
    field: 'dialog',
    header: 'dialog',
  },
  {
    field: 'movie',
    header: 'movie',
  },
  {
    field: 'character',
    header: 'character',
  },
];

const Quotes: FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{t('quotes')}</h1>
      <DataTable columns={columns} globalFilterKey="dialog" query={useGetQuotesQuery} />
    </div>
  );
};

export default Quotes;
