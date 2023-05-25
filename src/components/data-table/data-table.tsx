import { Column } from 'primereact/column';
import { DataTable as PrimeReactDataTable, DataTableProps } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TableColumn } from '../../shared/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { ['cy-data']?: string; columns: TableColumn[] } & DataTableProps<any>;

const DataTable: FC<Props> = ({ columns, ...rest }) => {
  const { t } = useTranslation();

  return (
    <>
      <PrimeReactDataTable {...rest}>
        {columns.map((column: TableColumn) => (
          <Column
            key={column.field}
            field={column.field}
            header={column.header}
            filter
            filterPlaceholder={t('search') || ''}
            style={{ minWidth: '12rem' }}
          />
        ))}
      </PrimeReactDataTable>
      <Paginator first={0} rows={10} totalRecords={120} onPageChange={(p) => console.log(p)} />
    </>
  );
};

export default DataTable;
