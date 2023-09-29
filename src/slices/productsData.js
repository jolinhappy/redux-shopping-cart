import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk('fetchProductsData', async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});
console.log(fetchProductsData);

const initialState = {
  products: null,
  isLoading: true,
  error: null,
};

export const productsDataSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 處理API的三種狀態
    builder.addCase(fetchProductsData.pending, (state) => {
      state.isLoading = true; // 正在fetch資料
    })
    .addCase(fetchProductsData.fulfilled, (state, action) => {
      console.log(action.type)
      // fetch成功
      state.products = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchProductsData.rejected, (state, action) => {
      state.isLoading = false; // fetch失敗
      state.error = action.error.message;
    });
  },
});

export default productsDataSlice.reducer;