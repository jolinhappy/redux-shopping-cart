import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from './slices/shoppingCart';

const store = configureStore({
  reducer: {
    shoppingCartReducer,
  }
});

export default store;