import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';

import Menubar from '../../components/menubar/menubar';

import { Title } from './home.style';

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
      label: t('characters'),
      icon: 'pi pi-fw pi-users',
      command: () => {
        navigate('/characters');
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
      <Title>{t('lotr')}</Title>
      <Outlet />
    </>
  );
};

export default Home;
