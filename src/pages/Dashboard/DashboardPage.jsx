import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getuserorder } from "../../utils";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setorders] = useState([]);

  useTitle("Dashboard");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getuserorder();
        setorders(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchdata();
  }, []);

  return (
    <main>
      {orders.length === 0 ? (
        <DashboardEmpty />
      ) : (
        <section>
          {orders.map((order) => (
            <DashboardCard key={order.id} order={order} />
          ))}
        </section>
      )}
    </main>
  );
};
