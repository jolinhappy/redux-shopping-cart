import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  data: null,
  loading: false,
  error: null,
};

export const productsDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    fetchDataRequest: (state) => (
      {
        ...state,
        loading: true,
        error: null,
      }
    ),
    fetchDataSuccess: (state, action) => (
      {
        ...state,
        ...action.payload,
        products: action.payload,
        loading: false,
        error: null,
      }
    ),
    fetchDataError: (state, action) => (
      {
        ...state,
        products: null,
        loading: false,
        error: action.payload,
      }
    ),
  }
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataError }  = productsDataSlice.actions;
export default productsDataSlice.reducer;