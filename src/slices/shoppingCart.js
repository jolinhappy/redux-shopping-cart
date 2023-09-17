import { createSlice, createSelector } from "@reduxjs/toolkit";

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

const selectCartItemList = (state) => state.shoppingCartReducer.cartItemList;
export const totalCartItemPriceSelector = createSelector(selectCartItemList, (selectCartItemList) => selectCartItemList.reduce((total, item) => total + item.price * item.amount, 0));

export const { addProductItem }  = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;