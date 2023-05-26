import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import store from './store';
import Books from './view/books/books.tsx';
import ErrorPage from './view/error-page/error-page.tsx';
import Home from './view/home/home.tsx';
import Movie from './view/movies/movie/movie.tsx';
import Movies from './view/movies/movies.tsx';
import Quotes from './view/quotes/quotes.tsx';

import './i18n';
import './index.scss';

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
        path: 'books',
        element: <Books />,
      },
      {
        path: 'movies/:id',
        element: <Movie />,
      },
      {
        path: 'quotes',
        element: <Quotes />,
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
