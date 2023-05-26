import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

import { ErrorPageContainer } from './error-page.style';

const ErrorPage: FC = () => {
  const error = useRouteError() as { statusText: string; message: string };
  const { t } = useTranslation();

  return (
    <ErrorPageContainer>
      <h1>{t('error-title')}</h1>
      <p>
        {t('error-message')}
        <a href="/">{t('home')}.</a>
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
