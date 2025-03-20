import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router";
import { useTitle } from "../../hooks/useTitle";
export const OrderPage = () => {
  const { state } = useLocation();
  useTitle("Order");

  return (
    <main>
      {state?.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
