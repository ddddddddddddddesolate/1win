import qs from 'qs';

import { adminAxiosInstance, axiosInstance } from 'api/axiosInstance';
import { PromoFields, PromoRoutes } from 'app/enums';
import { PromoType } from 'app/types';

const retrieveApiKeyFromQuery = (): string => {
  const search = window.location.search;

  const query = qs.parse(search, { ignoreQueryPrefix: true });

  return query.apiKey as string;
};

export const getOnePromo = (code: string) =>
  axiosInstance.get(`/promo/${code || 'default'}`);

export const getAllPromos = () =>
  adminAxiosInstance.get('/promo', {
    headers: {
      'x-api-key': retrieveApiKeyFromQuery(),
    },
  });

export const updateContent = (route: PromoRoutes, code: PromoType['id'], type: PromoFields, text: string) =>
  adminAxiosInstance.post(`/${route}`, { code, type, text }, {
    headers: {
      'x-api-key': retrieveApiKeyFromQuery(),
    },
  });

export const createPromo = (code: string) =>
  adminAxiosInstance.post(`/promo`, { code }, {
    headers: {
      'x-api-key': retrieveApiKeyFromQuery(),
    },
  });

export const uploadMedia = (formData: FormData) =>
  adminAxiosInstance.post(`/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-api-key': retrieveApiKeyFromQuery(),
    },
  });
