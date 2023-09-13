import { useState } from 'react';

export default function ProductListItem({ product, addProductToCart }) {
  const {id, title, price} = product;
  const initialProductContent = {
    title,
    id,
    price,
    amount: 1,
  };
  const [productContent, setProductContent] = useState(initialProductContent);
  const handleAdjustmentProductAmount = (event) => {
    const amount = event.target.value;
    setProductContent({
      ...productContent,
      amount,
    });
  };
  return (
    <div className="product-item-content-container">
      <p className="product-name">{productContent.title}</p>
      <p className='product-price'>$ {productContent.price}</p>
      <input className="product-amount" type="number" min="1" max="99" key={productContent.title} value={productContent.amount} onChange={handleAdjustmentProductAmount} />
      <button className="product-add-btn" onClick={() => addProductToCart(productContent)}>Add</button>
    </div>
  )
}
