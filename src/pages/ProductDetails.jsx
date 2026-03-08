import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import useCartStore from "../store/cartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const data = await fetchProductById(id);
    setProduct(data);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.image} width="200" />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;