import axios from 'axios';

const API_URL = 'http://rosamaster129523.protheus.cloudtotvs.com.br:4050/rest';



export const fetchOrders = async (userId) => {
  const response = await axios.get(`${API_URL}/pedidos/list`, {
    params: {
      user: userId,
      tipo: 'PC',
      status: '02',
      pageSize: 10
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  });
  return response.data.items;
};

export const fetchOrderDetails = async (orderId) => {
  const response = await axios.get(`${API_URL}/orders/${orderId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  });
  return response.data;
};

export const fetchUserInfo = async (username) => {
  const response = await axios.get(`${API_URL}/Users/${username}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  });
  return response.data;
};