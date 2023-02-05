import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";

function App() {
  const dispatch=useDispatch();
  const cartItems=useSelector(state=>state.cart.cartItems);
  useEffect(()=>{
    dispatch()
  },[cartItems])

  return <main>
    <Navbar/>
    <CartContainer/>  </main>;
}
export default App;
