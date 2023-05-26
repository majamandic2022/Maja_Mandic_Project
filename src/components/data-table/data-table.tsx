import { debounce } from 'lodash';
import { Column } from 'primereact/column';
import { DataTable as PrimeReactDataTable, DataTableProps } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TableColumn } from '../../shared/types';
import DataTableHeader from '../data-table-header/data-table-header';

import { DataTableContainer } from './data-table-container.style';

type Props = {
  ['cy-data']?: string;
  columns: TableColumn[];
  globalFilterKey: string;
  onRowClick?: (id: string) => void;
  // TODO: fix type
  query: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & DataTableProps<any>;

type PaginationItem = {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
};

const rows = 5;

const DataTable: FC<Props> = ({ columns, globalFilterKey, onRowClick, query, ...rest }) => {
  const { t } = useTranslation();

  const [offset, setOffset] = useState<number>(0);
  const [filter, setFilter] = useState<object>({});
  const { data, isLoading, isSuccess } = query({ offset, query: filter });

  if (!isSuccess && isLoading) {
    return <></>;
  }

  const debouncedFilter = debounce((filterText: string) => {
    setFilter({ [globalFilterKey]: `/${filterText}/i` });
  }, 300);

  const handleFilterChange = (filterText: string) => {
    debouncedFilter(filterText);
  };

  const handlePageChange = (paginationItem: PaginationItem) => {
    const { rows, page } = paginationItem;
    setOffset(page * rows);
  };

  return (
    <DataTableContainer>
      <PrimeReactDataTable
        value={data.docs}
        rows={rows}
        dataKey={columns[0].field || ''}
        loading={isLoading}
        header={<DataTableHeader onFilterChange={handleFilterChange} />}
        emptyMessage={t('no-results')}
        onRowClick={(e) => onRowClick && onRowClick(e.data['_id'] || '')}
        {...rest}
      >
        {columns.map((column: TableColumn) => (
          <Column
            key={column.field}
            field={column.field}
            header={t(column.header)}
            style={{ width: '20rem', cursor: 'pointer' }}
          />
        ))}
      </PrimeReactDataTable>
      <Paginator
        first={offset}
        rows={rows}
        totalRecords={data.total}
        onPageChange={(paginationItem: PaginationItem) => handlePageChange(paginationItem)}
      />
    </DataTableContainer>
  );
};

export default DataTable;
