import axios from 'axios';

// IMPORTANT: Make sure your backend runs on port 5000 and has /api/products route
const API_URL = 'http://localhost:5000/api/products'; 

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};