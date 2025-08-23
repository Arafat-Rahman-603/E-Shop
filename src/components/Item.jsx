import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedActions } from "../store/SelectedItem";
function Item({ item, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
  dispatch(selectedActions.itemIndx(id)); 
  navigate("/selected-item");
};
  return (
    <main className="itemsContainer">
      <div className="card itemsCard" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top itemsImg" />
        <div className="card-body">
          <h5 className="card-title item-title">{item.item_name}</h5>
          <p className="card-text">Product By {item.company}</p>
          <h5 className="card-title">TK {item.current_price}</h5>
          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={handleNavigate}
          >
            Buy / Add Cart
          </button>
        </div>
      </div>
    </main>
  );
}
export default Item;
