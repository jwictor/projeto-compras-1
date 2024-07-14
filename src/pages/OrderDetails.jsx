import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderDetails } from '../services/api';

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getOrderDetails = async () => {
      const data = await fetchOrderDetails(id);
      setOrderDetails(data);
    };
    getOrderDetails();
  }, [id]);

  return (
    <div>
      <h2>Detalhes do Pedido</h2>
      <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
    </div>
  );
};

export default OrderDetails;