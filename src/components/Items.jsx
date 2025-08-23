import { useEffect, useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/FetchItems";
import SearchItems from "./SearchItems";

function Items() {
  const searchItems = useSelector((store) => store.searchItem);
  const isSearching =
  typeof searchItems === "string" && searchItems.trim() !== "";

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.fetchItems);

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, refresh]);

  if (loading)
    return (
      <main className="loader">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );

  if (error)
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Error!</h5>
          <p className="card-text">{error}</p>
          <button onClick={handleRefresh} className="btn btn-danger">
            Reload The Page
          </button>
        </div>
      </div>
    );

  return (
    <main className="mainhomeItemsCon">
      {isSearching ? (
        <SearchItems />
      ) : (
        <div className="homeItems">
          {items.map((i, index) => (
            <Item key={i.id ?? `item-${index}`} id={i.id} item={i} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Items;
