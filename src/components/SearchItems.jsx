import { useSelector } from "react-redux";
import Item from "./Item";

function SearchItems() {
  const keyword = useSelector((store) => store.searchItem);
  const { items } = useSelector((store) => store.fetchItems);

  const filteredItems = items.filter((item) =>
    item.item_name?.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="homeItems">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Item key={item.id} id={item.id} item={item} />
        ))
      ) : (
        <center className="searchItems">
          <h3> No items found for</h3>
          <h3 className="text-danger">"{keyword}"!</h3>
        </center>
      )}
    </div>
  );
}

export default SearchItems;
