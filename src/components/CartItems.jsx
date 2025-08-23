import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice";

function CartItems({ item }) {
  const dispatch = useDispatch();
  const handleRemoveCartItem = () => {
    dispatch(cartActions.removeCartItems(item.id));
  };
  return (
    <>
      <div className="Cart-item-container">
        <div className="item-left-part">
          <img className="Cart-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.company}</div>
          <div className="item-name" style={{maxWidth:"90%"}}>{item.item_name}</div>
          <div className="price-container">
            <span className="original-price">
              Original Price: {item.original_price} TK
            </span>
          </div>
          <div className="price-container">
            <span className="discount-percentage">
              Discount: {item.discount_percentage}%
            </span>
          </div>
          <div className="price-container">
            <span className="current-price">
              Current Price: {item.current_price} TK
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">7 days</span> return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days"> {item.delivery_date}</span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={handleRemoveCartItem}>
          <MdDelete />
        </div>
      </div>
    </>
  );
}
export default CartItems;
