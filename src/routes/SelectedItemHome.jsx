import { useSelector } from "react-redux";
import SelectedItem from "../components/SelectedItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SelectedItemHome() {
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
  const selectedItemIndx = useSelector((state) => state.selectedItem);
   console.log(selectedItemIndx)
  const itemElement = items.filter((i) => selectedItemIndx === i.id);
  console.log(itemElement)
  return (
   <SelectedItem item={itemElement[0]} />
  );
}

export default SelectedItemHome;
