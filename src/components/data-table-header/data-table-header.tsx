import { InputText } from 'primereact/inputtext';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type FilterProps = {
  onFilterChange: (filterText: string) => void;
};

const DataTableHeader: FC<FilterProps> = ({ onFilterChange }) => {
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

export default DataTableHeader;
