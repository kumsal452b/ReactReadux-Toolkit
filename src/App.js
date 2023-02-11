import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const isOpen=useSelector((store)=>store.modal.isOpen)
  const isLoading=useSelector((store)=>store.cart.isLoading)
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(()=>{
    dispatch(getCartItems());
  },[])
  if(isLoading){
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }
  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
