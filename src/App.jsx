import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import { Outlet, useNavigation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import Loading from "./components/Loading/Loading";
function App() {

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return []; // U slučaju da je podatak u memoriji korumpiran
    }
  });  
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

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  const navigation = useNavigation();

  return (
    <>
      <ScrollToTop />
      <Header cartLength={cartItems.length}/>
      {navigation.state === 'loading' ? <Loading /> : (
      <Suspense fallback={<Loading />}>
        <Outlet context={cart} />
      </Suspense>
      )}
      <Footer />
    </>
  )
}

export default App
