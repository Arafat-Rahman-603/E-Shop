import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchItemActions } from "../store/SearchItem";

function HeaderAfterLogin() {
  const dispatch = useDispatch()
     const inputElement = useRef();
    const handleSearchProduct = (e) => {
    e.preventDefault()
    const keyword = e.target.value;
    dispatch(searchItemActions.searchElement(keyword));
  };
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/about"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <img
                src="icon.jpg"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  margin: "0 30px 0 0",
                }}
              />
            </Link>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link href="/" className="nav-link px-2 link-body-emphasis">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link px-2 link-body-emphasis">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 link-body-emphasis">
                  About
                </Link>
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                ref={inputElement}
                onChange={handleSearchProduct}
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
export default HeaderAfterLogin;
