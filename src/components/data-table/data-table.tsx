import { Column } from 'primereact/column';
import { DataTable as PrimeReactDataTable, DataTableProps } from 'primereact/datatable';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TableColumnType } from '../../shared/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { ['cy-data']?: string; columns: TableColumnType[] } & DataTableProps<any>;

const DataTable: FC<Props> = ({ columns, ...rest }) => {
  const { t } = useTranslation();

  return (
    <PrimeReactDataTable {...rest}>
      {columns.map((column: TableColumnType) => (
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
  );
};

export default DataTable;
