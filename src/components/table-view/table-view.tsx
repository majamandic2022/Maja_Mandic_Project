import { InputText } from 'primereact/inputtext';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Book, TableColumn } from '../../shared/types';
import DataTable from '../data-table/data-table';

type Props = {
  columns: TableColumn[];
};

const TableView: FC<Props> = ({ columns }) => {
  const { t } = useTranslation();
  const [loading] = useState(false);
  const [items] = useState<Book[]>([
    { title: 'Book 1', author: 'Dickens' },
    { title: 'Book 2', author: 'Dickens' },
    { title: 'Book 3', author: 'Dickens' },
  ]);

  const [listItems, setListItems] = useState<Book[]>([]);

  const handleFilterChange = (filterText: string) => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(filterText.toLowerCase()));
    setListItems(filteredItems);
  };

  return (
    <div className="datatable-container">
      <DataTable
        value={listItems}
        rows={10}
        dataKey={columns[0].field || ''}
        filterDisplay="row"
        loading={loading}
        header={<Header onFilterChange={handleFilterChange} />}
        columns={columns.map((col: TableColumn) => ({
          field: col.field,
          header: t(col.header),
        }))}
        emptyMessage={t('no-results')}
      />
    </div>
  );
};

type FilterProps = {
  onFilterChange: (filterText: string) => void;
};

const Header: FC<FilterProps> = ({ onFilterChange }) => {
  const { t } = useTranslation();
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setFilterText(text);
  };

  useEffect(() => {
    onFilterChange(filterText);
  }, [filterText]);

  return (
    <div className="flex justify-content-end">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText value={filterText} onChange={handleFilterChange} placeholder={t('search') || ''} />
      </span>
    </div>
  );
};

export default TableView;
