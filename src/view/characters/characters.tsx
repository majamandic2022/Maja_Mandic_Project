import { FC } from 'react';

import DataTable from '../../components/data-table/data-table';
import DataTableWrapper from '../../components/data-table-wrapper/data-table-wrapper';
import { TableColumn } from '../../shared/types';
import { useGetCharactersQuery } from '../../store/service';

const columns: TableColumn[] = [
  {
    field: '_id',
    header: 'id',
  },
  {
    field: 'height',
    header: 'height',
  },
  {
    field: 'race',
    header: 'race',
  },
  {
    field: 'gender',
    header: 'gender',
  },
  {
    field: 'birth',
    header: 'birth',
  },
  {
    field: 'spouse',
    header: 'spouse',
  },
  {
    field: 'death',
    header: 'death',
  },
  {
    field: 'realm',
    header: 'realm',
  },
  {
    field: 'hair',
    header: 'hair',
  },
  {
    field: 'name',
    header: 'name',
  },
  {
    field: 'wikiUrl',
    header: 'wiki-url',
  },
];

const title = 'characters';

const Characters: FC = () => (
  <DataTableWrapper title={title}>
    <DataTable columns={columns} globalFilterKey="name" query={useGetCharactersQuery} />
  </DataTableWrapper>
);

export default Characters;
