import HeaderBeforeLogin from "../components/HeaderBeforeLogin";
import HeaderAfterLogin from "../components/HeaderAfterLogin";
import Singup from "./Singup";
import Footer from "../components/Footer";
import About from "./About";
import Items from "../components/Items";
import SelectedItemHome from "./SelectedItemHome";
import SelecetedItem from "../components/SelectedItem";
import Cart from "./Cart";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SellerPanel from "./SellerPanel";
function App() {
  const isLogActive = useSelector((state) => state.log);
  return (
    <>
      {isLogActive ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
