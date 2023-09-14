export default function CartItem({ cartItem }) {
  return (
    <div className="cart-item-content-container">
      <p className="cart-item-name">{cartItem.title}</p>
      <input className="cart-item-amount" type="number" min="1" max="99" value={cartItem.amount} key={cartItem.title} />
      <button className="cart-item-delete-btn">delete</button>
    </div>
  )
}
