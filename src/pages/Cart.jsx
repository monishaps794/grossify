import useCartStore from "../store/cartStore";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = total > 20 ? 0 : 2;

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      <div className="cart-container">

        {/* Items */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">

              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>{formatPrice(item.price)}</p>
              </div>

              <div className="quantity-box">

                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>

            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>{formatPrice(deliveryFee)}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(total + deliveryFee)}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;