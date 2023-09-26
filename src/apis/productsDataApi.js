import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productsDataApi = createApi({
  reducerPath: 'productsDataApi',
  // 設定base URL
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: builder => ({
    // 定義一些api的操作，例如get, post等
    getProductsData: builder.query({
      query: () => `/products`
    })
  })
});

// 這裡export到外面的hook名稱，會依照上面endpoint取的名字加上use和query
export const { useGetProductsDataQuery } = productsDataApi;
