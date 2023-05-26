import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DataTableContainer } from './data-table-container.style';

interface DataTableWrapperProps {
  title: string;
  children: React.ReactNode;
}

const DataTableWrapper: FC<DataTableWrapperProps> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <DataTableContainer>
      <h1>{t(title)}</h1>
      {children}
    </DataTableContainer>
  );
};

export default DataTableWrapper;
