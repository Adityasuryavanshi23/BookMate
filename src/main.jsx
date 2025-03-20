import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { ScrollToTop } from "./components/others/ScrollToTop.jsx";
import { FilterProvider } from "./context/Filtercontext.jsx";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <FilterProvider>
      <CartProvider>
        <ScrollToTop />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <App />
      </CartProvider>
    </FilterProvider>
  </Router>
);
