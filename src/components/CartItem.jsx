export default function CartItem() {
  return (
    <div className="cart-item-content-container">
      <p className="cart-item-name">Apple</p>
      <input className="cart-item-amount" type="number" min="1" max="99" />
      <button className="cart-item-delete-btn">delete</button>
    </div>
  )
}
