import { InputText } from 'primereact/inputtext';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TableColumnType } from '../../shared/types';
import DataTable from '../data-table/data-table';

type Props = {
  columns: TableColumnType[];
};

const books = [
  {
    title: 'Book 1',
    author: 'Dickens',
  },
  {
    title: 'Book 2',
    author: 'Dickens',
  },
  {
    title: 'Book 3',
    author: 'Dickens',
  },
];

const TableView: FC<Props> = ({ columns }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={(e) => setGlobalFilterValue(e.target.value)}
            placeholder={t('search') || ''}
          />
        </span>
      </div>
    );
  };

  return (
    <div className="datatable-container">
      <DataTable
        value={books}
        paginator
        rows={10}
        dataKey={columns[0].field || ''}
        filterDisplay="row"
        loading={loading}
        header={renderHeader()}
        columns={columns.map((col: TableColumnType) => ({
          field: col.field,
          header: t(col.header),
        }))}
        emptyMessage={t('no-results')}
      />
    </div>
  );
};

export default TableView;
