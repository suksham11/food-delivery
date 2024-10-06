import React from "react";
import "./MyOrders.css";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const MyOrders = () => {
  const { url, token } = useContext(storeContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/useorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };
  return <div></div>;
};

export default MyOrders;
