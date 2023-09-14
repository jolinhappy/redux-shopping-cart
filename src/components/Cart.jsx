import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cartItemList } = useSelector(state => state.shoppingCartReducer);
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
        <span className="amount"> 300</span>
      </div>
    </div>
  )
}
