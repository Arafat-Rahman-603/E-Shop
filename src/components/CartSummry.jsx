import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartCheckOutActions } from "../store/CartCheckOut";

function CartSummary() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((store) => store.cart);
  const { items } = useSelector((store) => store.fetchItems);
  const cartElement = items.filter((i) => selector.includes(i.id));
  console.log(cartElement);
  const price = cartElement.map((i) => i.current_price);
  const discount = cartElement.map((i) => i.discount_percentage);
  let totalAmount = 0;
  let totalSave = 0;
  price.forEach((prices) => {
    totalAmount += prices;
  });
  discount.forEach((prices) => {
    totalSave += prices;
  });
  console.log(price);
  console.log(totalAmount);
  const handleOder = () => {
  dispatch(cartCheckOutActions.finalAmount(totalAmount))
  navigate("/cart-check-out")
}
  return (
    <div className="Cart-summary">
      <div className="Cart-details-container">
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">TK {totalAmount}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total Saving</span>
          <span className="price-item-value priceDetail-base-discount">
            {totalSave}%
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Delivery Fee</span>
          <span className="price-item-value">TK 99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">TK {totalAmount + 99}</span>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        style={{ width: "100%" }}
        onClick={handleOder}
      >
        PLACE ORDER
      </button>
    </div>
  );
}
export default CartSummary;
