import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from './slices/shoppingCart';
import { productsDataApi } from "./apis/productsDataApi";

const store = configureStore({
  reducer: {
    shoppingCartReducer,
    [productsDataApi.reducerPath]: productsDataApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsDataApi.middleware)
});

export default store;