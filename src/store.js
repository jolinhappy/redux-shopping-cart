import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from './slices/shoppingCart';
import productsDataReducer from "./slices/productsData";

const store = configureStore({
  reducer: {
    shoppingCartReducer,
    productsDataReducer,
  }
});

export default store;