import ProductListItem from "./ProductListItem";
import { useDispatch } from "react-redux";
import { addProductItem } from "../slices/shoppingCart";

export default function ProductList() {
  const dispatch = useDispatch();
  const addProductToCart = (payload) => {
    dispatch(addProductItem(payload));
  };

  // fake data
  // https://fakeapi.platzi.com/en/resources/postman
  const productsData = [
    {
      "id": 10,
      "title": "Small Frozen Gloves",
      "price": 981,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://picsum.photos/640/640?r=6625",
        "https://picsum.photos/640/640?r=4209",
        "https://picsum.photos/640/640?r=2686"
      ],
      "creationAt": "2023-09-12T06:06:08.000Z",
      "updatedAt": "2023-09-12T06:06:08.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://picsum.photos/640/640?r=4570",
        "creationAt": "2023-09-12T06:06:08.000Z",
        "updatedAt": "2023-09-12T06:06:08.000Z"
        }
      },
      {
        "id": 11,
        "title": "Small Cotton Shirt",
        "price": 962,
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "images": [
          "https://picsum.photos/640/640?r=7764",
          "https://picsum.photos/640/640?r=1551",
          "https://picsum.photos/640/640?r=3888"
        ],
        "creationAt": "2023-09-12T06:06:08.000Z",
        "updatedAt": "2023-09-12T06:06:08.000Z",
        "category": {
          "id": 2,
          "name": "Electronics",
          "image": "https://picsum.photos/640/640?r=4570",
          "creationAt": "2023-09-12T06:06:08.000Z",
          "updatedAt": "2023-09-12T06:06:08.000Z"
        }
      },
      {
        "id": 12,
        "title": "Practical Rubber Pants",
        "price": 222,
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "images": [
          "https://picsum.photos/640/640?r=3848",
          "https://picsum.photos/640/640?r=3134",
          "https://picsum.photos/640/640?r=9144"
        ],
        "creationAt": "2023-09-12T06:06:08.000Z",
        "updatedAt": "2023-09-12T06:06:08.000Z",
        "category": {
          "id": 1,
          "name": "nuevo",
          "image": "https://picsum.photos/640/640?r=5116",
          "creationAt": "2023-ｓ09-12T06:06:08.000Z",
          "updatedAt": "2023-09-12T13:00:31.000Z"
        }
      },
    ]

  // console.log(cartItemList);
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-item-container">
        {
          productsData.map((product) => (
            <ProductListItem product={product} key={product.id} addProductToCart={addProductToCart} />
          ))
        }
      </div>
    </div>
  )
}
