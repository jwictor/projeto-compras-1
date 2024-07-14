import  { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { fetchOrders } from '../services/api';

 const Home = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const getOrders = async () => {
//       const userId = localStorage.getItem('user_id');
//       const data = await fetchOrders(userId);
//       setOrders(data);
//     };
//     getOrders();
//   }, []);

useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      fetchOrders(userId)
        .then((data) => {
          setOrders(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDetailsClick = (orderId) => {
    window.location.href = `/order/${orderId}`;
  };

  return (
    <div>
      <h2>Pedidos Pendentes</h2>
      <CardList orders={orders} onDetailsClick={handleDetailsClick} />
    </div>
  );
};

export default Home;