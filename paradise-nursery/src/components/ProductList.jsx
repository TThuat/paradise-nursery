import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10, img: "https://via.placeholder.com/80" },
    { id: 2, name: "Snake Plant", price: 15, img: "https://via.placeholder.com/80" },
    { id: 3, name: "Peace Lily", price: 12, img: "https://via.placeholder.com/80" },
    { id: 4, name: "Fern", price: 8, img: "https://via.placeholder.com/80" },
    { id: 5, name: "ZZ Plant", price: 14, img: "https://via.placeholder.com/80" },
    { id: 6, name: "Spider Plant", price: 9, img: "https://via.placeholder.com/80" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 10, img: "https://via.placeholder.com/80" },
    { id: 8, name: "Sunflower", price: 6, img: "https://via.placeholder.com/80" },
    { id: 9, name: "Tulip", price: 7, img: "https://via.placeholder.com/80" },
    { id: 10, name: "Lavender", price: 11, img: "https://via.placeholder.com/80" },
    { id: 11, name: "Daisy", price: 5, img: "https://via.placeholder.com/80" },
    { id: 12, name: "Jasmine", price: 13, img: "https://via.placeholder.com/80" }
  ]
};

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = (id) => cart.find(item => item.id === id);

  return (
    <div>
      <h1>Plant Shop</h1>

      {Object.keys(products).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {products[category].map(product => (
            <div key={product.id} style={{ marginBottom: "10px" }}>
              
              <img src={product.img} width="60" />

              <span>
                {product.name} - ${product.price}
              </span>

              <button
                disabled={isAdded(product.id)}
                onClick={() => dispatch(addItem(product))}
              >
                {isAdded(product.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}