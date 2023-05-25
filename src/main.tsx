import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Book from './view/books/book/book.tsx';
import Books from './view/books/books.tsx';
import ErrorPage from './view/error-page/error-page.tsx';
import Home from './view/home/home.tsx';
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
        path: 'books/:id',
        element: <Book />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
