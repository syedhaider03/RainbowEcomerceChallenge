import uploadService from 'services/uploadService';
import endpoints from './endpoints';
import httpAuthService from 'services/httpAuthService';
import httpProductService from 'services/httpProductService';

/* Asset Upload Powered by ByteScale*/

export const doPostUploadImage = <T>(data: FormData) => {
  return uploadService.post<T>(endpoints.imageUpload, data);
};

/* Auth Endpoints Powered by a Mock Server in Beeceptor */

export const doPostSignup = <T>(data: Auth.SignupPayload) => {
  return httpAuthService.post<T>(endpoints.user, data);
};

export const doPutUserProfile = <T>(
  data: Omit<Auth.SignupPayload, 'email'>,
  user_id: string,
) => {
  return httpAuthService.put<T>(`${endpoints.user}/${user_id}`, data);
};

export const doGetAllUsers = <T>() => {
  return httpAuthService.get<T>(endpoints.user);
};

/* Get Products Endpoints powered by Dummy JSON */

export const doGetAllCategories = <T>() => {
  return httpProductService.get<T>(endpoints.productCategories);
};

export const doGetFilteredProducts = <T>(category: string) => {
  return httpProductService.get<T>(
    `${endpoints.productCategory}/${category}`,
  );
};

export const doGetAllProducts = <T>({
  limit,
  skip,
  select,
}: Pick<Products.QueryParams, 'limit' | 'select' | 'skip'>) => {
  return httpProductService.get<T>(endpoints.products, {
    params: {
      limit,
      skip,
      select,
    },
  });
};

export const doGetSearchedProducts = <T>(params: Products.QueryParams) => {
  return httpProductService.get<T>(endpoints.productSearch, {
    params,
  });
};
