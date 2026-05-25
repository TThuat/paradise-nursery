import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 12 },
    { id: 4, name: "Spider Plant", price: 9 },
    { id: 5, name: "Fern", price: 8 },
    { id: 6, name: "ZZ Plant", price: 14 }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 10 },
    { id: 8, name: "Sunflower", price: 6 },
    { id: 9, name: "Tulip", price: 7 },
    { id: 10, name: "Lavender", price: 11 },
    { id: 11, name: "Daisy", price: 5 },
    { id: 12, name: "Jasmine", price: 13 }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 5 },
    { id: 14, name: "Aloe Juvenna", price: 9 },
    { id: 15, name: "Echeveria", price: 8 },
    { id: 16, name: "Haworthia", price: 7 },
    { id: 17, name: "Crassula", price: 10 },
    { id: 18, name: "Sedum", price: 6 }
  ]
};

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = (id) => cart.find(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌱 Plant Shop</h1>

      {Object.keys(products).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {products[category].map(product => (
            <div key={product.id} style={{ marginBottom: "10px" }}>
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