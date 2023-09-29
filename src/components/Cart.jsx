import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { totalCartItemPriceSelector, deleteProductItem } from "../slices/shoppingCart";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItemList } = useSelector(state => state.shoppingCartReducer);
  const totalCartItemPrice = useSelector(totalCartItemPriceSelector);
  const deleteShoppingCartItem = (payload) => {
    dispatch(deleteProductItem(payload));
  };
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-item-container">
        {
          cartItemList.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} deleteShoppingCartItem={deleteShoppingCartItem} />
          ))
        }
      </div>
      <div className="total-amount">
        Total Amount:  
        <span className="amount"> {totalCartItemPrice}</span>
      </div>
    </div>
  )
}
