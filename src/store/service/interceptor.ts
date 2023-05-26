import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_API_KEY;

    headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export const baseQueryInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  Record<string, unknown>,
  FetchBaseQueryMeta
> = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: Record<string, unknown>) => {
  return baseQuery(args, api, extraOptions);
};
