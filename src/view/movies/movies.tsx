import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import DataTable from '../../components/data-table/data-table';
import DataTableWrapper from '../../components/data-table-wrapper/data-table-wrapper';
import { TableColumn } from '../../shared/types';
import { useGetMoviesQuery } from '../../store/service';

const columns: TableColumn[] = [
  {
    field: '_id',
    header: 'id',
  },
  {
    field: 'name',
    header: 'name',
  },
  {
    field: 'runtimeInMinutes',
    header: 'runtime-in-minutes',
  },
  {
    field: 'budgetInMillions',
    header: 'budget-in-millions',
  },
  {
    field: 'boxOfficeRevenueInMillions',
    header: 'box-office-revenue-in-millions',
  },
  {
    field: 'academyAwardNominations',
    header: 'academy-award-nominations',
  },
  {
    field: 'academyAwardWins',
    header: 'academy-award-wins',
  },
  {
    field: 'rottenTomatoesScore',
    header: 'rotten-tomatoes-score',
  },
];

const title = 'movies';

const Movies: FC = () => {
  const navigate = useNavigate();

  return (
    <DataTableWrapper title={title}>
      <DataTable
        columns={columns}
        globalFilterKey="name"
        onRowClick={(id) => navigate(`/movies/${id}`)}
        query={useGetMoviesQuery}
      />
    </DataTableWrapper>
  );
};

export default Movies;
