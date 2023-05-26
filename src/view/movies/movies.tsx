import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import DataTable from '../../components/data-table/data-table';
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

const Movies: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{t('movies')}</h1>
      <DataTable
        columns={columns}
        globalFilterKey="name"
        onRowClick={(id) => navigate(`/movies/${id}`)}
        query={useGetMoviesQuery}
      />
    </div>
  );
};

export default Movies;
