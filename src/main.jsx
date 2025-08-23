import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Cart from "./routes/Cart";
import About from "./routes/About.jsx";
import Singup from "./routes/Singup.jsx";
import Items from "./components/Items.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import SelectedItemHome from "./routes/SelectedItemHome.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import mainStore from "./store/index.js";
import { Provider } from "react-redux";
import Checkout from "./routes/CheckOut.jsx";
import CartCheckout from "./routes/CartCheckOut.jsx";
import SellerPanel from "./routes/SellerPanel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Items /> },
      { path: "/cart", element: <Cart /> },
      { path: "/about", element: <About /> },
      { path: "/sing-up", element: <Singup /> },
      { path: "/selected-item", element: <SelectedItemHome /> },
    ],
  },
  { path: "/check-out", element: <Checkout /> },
  { path: "/cart-check-out", element: <CartCheckout /> },
  { path: "/add-item-by-seller", element: <SellerPanel /> },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={mainStore}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
);
