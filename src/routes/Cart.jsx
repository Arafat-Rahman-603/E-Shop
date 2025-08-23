import CartSummary from "../components/CartSummry";
import CartItems from "../components/CartItems";
import Msg from "../components/SelectedItemMsg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const isLogActive = useSelector((state) => state.log);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogActive) {
      navigate("/sing-up");
      if (!isLogActive) {
        alert("Please login!");
      }
    }
  }, []);
  const { items } = useSelector((state) => state.fetchItems);
  const selector = useSelector((state) => state.cart);
  const cartElements = items.filter((i) => selector.includes(i.id));
  if (cartElements === undefined || cartElements.length === 0) return <Msg />;
  return (
    <>
      <main>
        <div className="Cart-page">
          <div className="Cart-items-container">
            {cartElements.map((i) => (
              <CartItems item={i} />
            ))}
          </div>
          <CartSummary />
        </div>
      </main>
    </>
  );
};

export default Cart;
