import React, { FC } from 'react';

import DataTable from '../../components/data-table/data-table';
import DataTableWrapper from '../../components/data-table-wrapper/data-table-wrapper';
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

const title = 'quotes';

const Quotes: FC = () => (
  <DataTableWrapper title={title}>
    <DataTable columns={columns} globalFilterKey="dialog" query={useGetQuotesQuery} />
  </DataTableWrapper>
);

export default Quotes;
