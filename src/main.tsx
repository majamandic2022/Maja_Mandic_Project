import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import store from './store';
import Characters from './view/characters/characters.tsx';
import ErrorPage from './view/error-page/error-page.tsx';
import Home from './view/home/home.tsx';
import Movies from './view/movies/movies.tsx';
import Quote from './view/quotes/quote/quote.tsx';
import Quotes from './view/quotes/quotes.tsx';

import './i18n';
import './styles/index.scss';
import './styles/datatable-header.scss';
import './styles/menubar.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'characters',
        element: <Characters />,
      },
      {
        path: 'quotes',
        element: <Quotes />,
      },
      {
        path: 'quotes/:id',
        element: <Quote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
