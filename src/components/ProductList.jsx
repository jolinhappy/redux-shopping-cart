import ProductListItem from "./ProductListItem";
import { useDispatch } from "react-redux";
import { addProductItem } from "../slices/shoppingCart";
import { useGetProductsDataQuery } from "../apis/productsDataApi";

export default function ProductList() {
  const dispatch = useDispatch();
  const {data, error, isLoading} = useGetProductsDataQuery();
  const addProductToCart = (payload) => {
    dispatch(addProductItem(payload));
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-item-container">
        {
          isLoading ? <p>Loading...</p> : data.map((product) => (
            <ProductListItem product={product} key={product.id} addProductToCart={addProductToCart} />
          ))
        }
      </div>
    </div>
  )
}
