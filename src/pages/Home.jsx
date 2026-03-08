import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const categories = [
  { name: "All", icon: "🛒" },
  { name: "Fruits", icon: "🍎" },
  { name: "Vegetables", icon: "🥕" },
  { name: "Dairy", icon: "🥛" },
  { name: "Snacks", icon: "🍟" },
  { name: "Beverages", icon: "🥤" }
];

const Home = ({ searchTerm }) => {
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  //const [searchTerm, setSearchTerm] = useState("");
  if (loading) return <Loader />;

  const categoryKeywords = {
    Fruits: ["apple", "banana", "kiwi", "orange", "berry"],
    Vegetables: ["cucumber", "pepper", "chili", "potato", "onion"],
    Dairy: ["milk", "egg", "butter", "cheese"],
    Snacks: [
      "chips",
      "chocolate",
      "biscuit",
      "cookie",
      "ice cream",
      "honey",
      "snack",
      "wafer",
      "candy"
    ],
    Beverages: ["juice", "cola", "coffee", "drink", "tea"]
  };

  const filterByCategory = (product) => {
    const title = product.title.toLowerCase();

    if (selectedCategory === "All") return true;

    const keywords = categoryKeywords[selectedCategory];

    if (!keywords) return true;

    return keywords.some((word) => title.includes(word));
  };

  const filteredProducts = products
  .filter(filterByCategory)
  .filter((product) =>
    product.title.toLowerCase().includes((searchTerm || "").toLowerCase())
  );
  return (
    <div>
     
     


      {/* HERO SECTION */}
      <div className="hero-container">

        <div className="hero-card fresh">
          <h2>Farm Fresh Fruits</h2>
          <p>Healthy & organic produce</p>
        </div>

        <div className="hero-card deals">
          <h2>Daily Essentials</h2>
          <p>Milk, Eggs, Bread & more</p>
        </div>

        <div className="hero-card snacks">
          <h2>Snack Time</h2>
          <p>Chips, Drinks & Treats</p>
        </div>

      </div>

      {/* Category Bar */}
      <div className="category-bar">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-item ${
              selectedCategory === cat.name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            <div className="category-icon">{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      {/* TRENDING PRODUCTS */}
      <div className="trending-section">

  <div className="trending-header">
    <h2>🔥 Trending Today</h2>
    <span>Popular items people love</span>
  </div>

  <div className="trending-grid">
    {products.slice(0, 4).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>

</div>

      {/* PRODUCTS */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Home;