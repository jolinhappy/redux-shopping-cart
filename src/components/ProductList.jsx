import { useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { useDispatch , useSelector } from "react-redux";
import { addProductItem} from "../slices/shoppingCart";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "../slices/productsData";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productsDataReducer);
  const addProductToCart = (payload) => {
    dispatch(addProductItem(payload));
  };

  useEffect(() => {
    const fetchProductsData = () => {
      // dispatch 開始發送api request
      dispatch(fetchDataRequest());
      fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // dispatch 成功的 action
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        // dispatch 失敗的 action
        dispatch(fetchDataError(error.message));
      });  
    };
    fetchProductsData()
  }, [dispatch]);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-item-container">
        {
          products && products.map((product) => (
            <ProductListItem product={product} key={product.id} addProductToCart={addProductToCart} />
          ))
        }
      </div>
    </div>
  )
}
