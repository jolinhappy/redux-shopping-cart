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
    deleteProductItem: (state, action) => {
      state.cartItemList = state.cartItemList.filter(item => item.id !== action.payload);
    },
    adjustPurchaseItemAmount: (state, action) => {
      state.cartItemList = state.cartItemList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            amount: action.payload.amount,
          }
        }
        return item;
      });
    },
  }
});

const selectCartItemList = (state) => state.shoppingCartReducer.cartItemList;
export const totalCartItemPriceSelector = createSelector(selectCartItemList, (selectCartItemList) => selectCartItemList.reduce((total, item) => total + item.price * item.amount, 0));

export const { addProductItem, deleteProductItem, adjustPurchaseItemAmount }  = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;