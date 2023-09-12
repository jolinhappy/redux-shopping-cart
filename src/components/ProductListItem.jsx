export default function ProductListItem() {
  return (
    <div className="product-item-content-container">
      <p className="product-name">Apple</p>
      <input className="product-amount" type="number" min="1" max="99" />
      <button className="product-add-btn">Add</button>
    </div>
  )
}
