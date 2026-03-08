import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
    setLoading(false);
  };

  return { products, loading };
};

export default useProducts;