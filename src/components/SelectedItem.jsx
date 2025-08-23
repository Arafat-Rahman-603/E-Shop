import { useDispatch } from "react-redux";
import Msg from "./SelectedItemMsg";
import { cartActions } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";

function SelectedItem({item}) {
    if(!item) return <Msg/>
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleBuyButton = () => {
      navigate("/check-out")
    }
    const handleAddCart = () => {
      dispatch(cartActions.addCartItems(item.id))
      alert('Item was add in cart.')
    }
  return (
    <>
      <main className="container SelectedItemHomeCon" id={item.id}>
        <img src={item.image} className="SelectedItemHome" alt={item.item_name} style={{maxWidth:"100%"}}/>
        <div className="bg-body-tertiary p-5 rounded mt-3">
          <h1>{item.item_name}</h1>
          <p className="lead">Product By {item.company}</p>
           <p className="lead text-danger">Discount {item.discount_percentage}%</p>
          <h1>TK {item.current_price}</h1>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "5px" }}
            onClick={handleBuyButton}
          >
            BUY NOW !
          </button>
          <button
            type="button"
            className="btn btn-warning"
            style={{ width: "100%", marginTop: "15px" }}
            onClick={handleAddCart}
          >
            ADD TO CART
          </button>
        </div>
      </main>
    </>
  );
}

export default SelectedItem;