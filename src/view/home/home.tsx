import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';

import Menubar from '../../components/menubar/menubar';

const Home: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    {
      label: t('home'),
      icon: 'pi pi-fw pi-home',
      command: () => {
        navigate('/');
      },
    },
    {
      label: t('movies'),
      icon: 'pi pi-fw pi-video',
      command: () => {
        navigate('/movies');
      },
    },
    {
      label: t('books'),
      icon: 'pi pi-fw pi-book',
      command: () => {
        navigate('/books');
      },
    },
    {
      label: t('quotes'),
      icon: 'pi pi-fw pi-pencil',
      command: () => {
        navigate('/quotes');
      },
    },
  ];

  return (
    <>
      <Menubar model={items} />
      <h1 style={{ textAlign: 'center' }}>{t('lotr')}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
