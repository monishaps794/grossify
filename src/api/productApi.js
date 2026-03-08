import axios from "axios";

const API_URL = "https://dummyjson.com/products/category/groceries";

export const fetchProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data.products;
};

export const fetchProductById = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};