import { useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { useDispatch, useSelector } from "react-redux";
import { addProductItem } from "../slices/shoppingCart";
import { fetchProductsData } from '../slices/productsData';

export default function ProductList() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(state => state.productsDataReducer);
  const addProductToCart = (payload) => {
    dispatch(addProductItem(payload));
  };

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-item-container">
        {
          isLoading ? <p>Loading...</p> : products.map((product) => (
            <ProductListItem product={product} key={product.id} addProductToCart={addProductToCart} />
          ))
        }
      </div>
    </div>
  )
}
