import { useState } from 'react';
import { useDispatch } from "react-redux";
import { adjustPurchaseItemAmount } from "../slices/shoppingCart";

export default function CartItem({ cartItem, deleteShoppingCartItem }) {
  const dispatch = useDispatch();
  const [purchaseProductContent, setPurchaseProductContent] = useState(cartItem);
  const handleAdjustmentPurchaseProductAmount = (event) => {
    const amount = event.target.value;
    setPurchaseProductContent({
      ...purchaseProductContent,
      amount,
    });
    dispatch(adjustPurchaseItemAmount({ id: purchaseProductContent.id, amount }));
  };
  return (
    <div className="cart-item-content-container">
      <p className="cart-item-name">{cartItem.title}</p>
      <input className="cart-item-amount" type="number" min="1" max="99" value={purchaseProductContent.amount} key={purchaseProductContent.id} onChange={handleAdjustmentPurchaseProductAmount} />
      <button className="cart-item-delete-btn" onClick={() => deleteShoppingCartItem(purchaseProductContent.id)}>delete</button>
    </div>
  )
}
