import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const dispatch=useDispatch();
  const cartItems=useSelector(state=>state.cart.cartItems);
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  return <main>
    <Navbar/>
    <CartContainer/>  </main>;
}
export default App;
