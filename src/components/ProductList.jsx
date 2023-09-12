import ProductListItem from "./ProductListItem";

export default function ProductList() {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-item-container">
        <ProductListItem />
        <ProductListItem />
      </div>
    </div>
  )
}
