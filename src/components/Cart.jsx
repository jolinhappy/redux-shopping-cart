import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { totalCartItemPriceSelector } from "../slices/shoppingCart";

export default function Cart() {
  const { cartItemList } = useSelector(state => state.shoppingCartReducer);
  const totalCartItemPrice = useSelector(totalCartItemPriceSelector);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-item-container">
        {
          cartItemList.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
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
