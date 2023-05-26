import { Column } from 'primereact/column';
import { DataTable as PrimeReactDataTable, DataTableProps } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TableColumn } from '../../shared/types';
import Header from '../data-table-header/data-table-header';

type Props = {
  ['cy-data']?: string;
  columns: TableColumn[];
  globalFilterKey: string;
  onRowClick?: (id: string) => void;
  query: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & DataTableProps<any>;

const DataTable: FC<Props> = ({ columns, globalFilterKey, onRowClick, query, ...rest }) => {
  const { t } = useTranslation();

  const [offset, setOffset] = useState<number>(0);
  const [filter, setFilter] = useState({});
  const { data, isLoading, isSuccess } = query({ offset, query: filter });

  if (!isSuccess && isLoading) {
    return <></>;
  }

  const handleFilterChange = (filterText: string) => {
    setFilter({ [globalFilterKey]: `/${filterText}/i` });
  };

  return (
    <div className="datatable-container">
      <PrimeReactDataTable
        value={data.docs}
        rows={10}
        dataKey={columns[0].field || ''}
        filterDisplay="row"
        loading={isLoading}
        header={<Header onFilterChange={handleFilterChange} />}
        emptyMessage={t('no-results')}
        onRowClick={(e) => onRowClick && onRowClick(e.data['_id'] || '')}
        {...rest}
      >
        {columns.map((column: TableColumn) => (
          <Column
            key={column.field}
            field={column.field}
            header={t(column.header)}
            filter
            filterPlaceholder={t('search') || ''}
            style={{ minWidth: '12rem' }}
          />
        ))}
      </PrimeReactDataTable>
      <Paginator first={0} rows={10} totalRecords={data.total} onPageChange={(p) => console.log(p)} />
    </div>
  );
};

export default DataTable;
