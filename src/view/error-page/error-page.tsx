import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError();
  const { t } = useTranslation();

  return (
    <div id="error-page">
      <h1>{t('error-title')}</h1>
      <p>
        {t('error-message')}
        <a href="/">{t('home')}.</a>
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
