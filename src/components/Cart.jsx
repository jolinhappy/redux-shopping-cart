import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-item-container">
        <CartItem />
      </div>
      <div className="total-amount">
        Total Amount:  
        <span className="amount"> 300</span>
      </div>
    </div>
  )
}
