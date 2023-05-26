import React, { FC } from 'react';
import { useNavigate } from 'react-router';

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
];

const title = 'quotes';

const Quotes: FC = () => {
  const navigate = useNavigate();

  return (
    <DataTableWrapper title={title}>
      <DataTable
        columns={columns}
        globalFilterKey="dialog"
        query={useGetQuotesQuery}
        onRowClick={(id) => navigate(`/quotes/${id}`)}
      />
    </DataTableWrapper>
  );
};

export default Quotes;
