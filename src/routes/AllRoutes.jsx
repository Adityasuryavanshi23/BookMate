import { Routes, Route } from "react-router";
import { ProtectedRoutes } from "./protectedRoutes";
import {
  CartPage,
  HomePage,
  ProductsList,
  ProductDetail,
  DashboardPage,
  Login,
  Register,
  OrderPage,
  PageNotFound,
} from "../pages";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="Home" />} />
      <Route
        path="/Cart"
        element={
          <ProtectedRoutes>
            <CartPage title="Cart" />
          </ProtectedRoutes>
        }
      />
      <Route path="/productslist" element={<ProductsList />} />
      <Route
        path="/product/:id"
        element={<ProductDetail title="ProductDetail" />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <DashboardPage />
          </ProtectedRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/orderpage" element={<OrderPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
