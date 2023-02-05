import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { CartItems } from "./CartItems";

const CartContainer = () => {
  const dispatch=useDispatch()
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>Your bag</h2>
          <h4>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch(clearCart())}>Clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
