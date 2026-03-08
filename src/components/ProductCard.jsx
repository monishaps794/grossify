import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import { formatPrice } from "../utils/formatPrice";

const imageMap = {
  apple: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
  cucumber: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cucumber.jpg",
  eggs: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Chicken_eggs.jpg",
  kiwi: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg",
  juice: "https://upload.wikimedia.org/wikipedia/commons/3/36/Orange_Juice.jpg"
};

const ProductCard = ({ product }) => {

  const { cart, addToCart, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const cartItem = cart.find((item) => item.id === product.id);

  const title = product.title.toLowerCase();

  let imageSrc = product.thumbnail || product.image;

  if (title.includes("apple")) imageSrc = imageMap.apple;
  else if (title.includes("cucumber")) imageSrc = imageMap.cucumber;
  else if (title.includes("egg")) imageSrc = imageMap.eggs;
  else if (title.includes("kiwi")) imageSrc = imageMap.kiwi;
  else if (title.includes("juice")) imageSrc = imageMap.juice;

  const discount = Math.floor(Math.random() * 20) + 5;

  return (
    <div className="product-card">

      <div className="discount-badge">{discount}% OFF
       ⚡ 10 min 
      </div>

      <img src={imageSrc} alt={product.title} />

      <h4>{product.title.substring(0, 40)}...</h4>
      <div className="rating">
       ⭐⭐⭐⭐☆
       </div>
       
       <div className="stock">
       Only few left
      </div>

      <p className="price">{formatPrice(product.price)}</p>

      <div className="card-actions">

        <Link to={`/product/${product.id}`} className="view-btn">
          View
        </Link>

        {!cartItem ? (
          <button
            onClick={() => addToCart(product)}
            className="add-btn"
          >
            Add
          </button>
        ) : (
          <div className="quantity-box">

            <button onClick={() => decreaseQuantity(product.id)}>
              -
            </button>

            <span>{cartItem.quantity}</span>

            <button onClick={() => increaseQuantity(product.id)}>
              +
            </button>

          </div>
        )}

      </div>

    </div>
  );
};

export default ProductCard;