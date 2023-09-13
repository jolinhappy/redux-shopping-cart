import { createSlice } from "@reduxjs/toolkit";

const initialShoppingCartState = {
  cartItemList: []
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialShoppingCartState,
  reducers: {
    addProductItem: (state, action) => {
      state.cartItemList.push(action.payload);
    },
  }
});

export const { addProductItem }  = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;