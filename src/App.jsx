import { useState } from "react";
import Plants from "./components/Plants";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const plantInCart = cart.find((item) => item.id === plant.id);
    if (plantInCart) {
      const newCart = cart.map((item) => {
        if (item.id === plant.id) {
          return { ...item, quantity: item.quantity + 1 };

        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };
  const increaseQuantity = (plant) => {
    const newCart = cart.map((item) => {
      if (item.id === plant.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCart);
  };
  const decreaseQuantity = (plant) => {
    const newCart = cart.map((item) => {
      if (item.id === plant.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCart);
  }
  return (
    <>
    <h1>Proper Plants</h1>
    <Plants addToCart={addToCart} />

    <Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
    </>
  );
} 