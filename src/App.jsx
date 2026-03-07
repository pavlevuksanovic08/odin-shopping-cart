import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom";
import { useState } from "react";
function App() {

  const [cartItems, setCartItems] = useState([])
  const cart = {
    cartItems,
    addToCart: (item, quantity) => {
      setCartItems(prev => {
        const existing = prev.find(i => i.item.id === item.id);
        if (existing) {
          return prev.map(i =>
            i.item.id === item.id ? {...i, quantity: i.quantity + quantity} : i
          );
        }
        return [...prev, {item, quantity}];
      })
    },
    removeFromCart: (id) => {
      setCartItems(prev => 
        prev.filter(i => i.item.id !== id)
      )
    },
    changeQuantity: (id, quantity) => {
      setCartItems(prev => 
        prev.map(i =>
          i.item.id === id ? {...i, quantity: quantity} : i
        )
      )
    },
    totalPrice: () => 
      cartItems.reduce((total, current) => total + current.item.price * current.quantity, 0)
  }

  return (
    <>
      <Header cartLength={cartItems.length}/>
      <Outlet context={cart}/>
      <Footer />
    </>
  )
}

export default App
