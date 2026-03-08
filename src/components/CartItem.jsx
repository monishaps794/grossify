import useCartStore from "../store/cartStore";
import { formatPrice } from "../utils/formatPrice";

const CartItem = ({ item }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="cart-item">
      <img src={item.image} width="60" />

      <h4>{item.title}</h4>

      <p>{formatPrice(item.price)}</p>

      <p>Qty: {item.quantity}</p>

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;