const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    rating: 4.5,
    image: "https://placehold.co/300x200?text=Headphones",
    description: "Premium sound quality with noise cancellation.",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 1899,
    category: "Footwear",
    rating: 4.2,
    image: "https://placehold.co/300x200?text=Shoes",
    description: "Lightweight and comfortable for daily runs.",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 3200,
    category: "Kitchen",
    rating: 4.7,
    image: "https://placehold.co/300x200?text=Coffee+Maker",
    description: "Brews perfect coffee every morning.",
  },
  {
    id: 4,
    name: "Yoga Mat",
    price: 850,
    category: "Fitness",
    rating: 4.3,
    image: "https://placehold.co/300x200?text=Yoga+Mat",
    description: "Non-slip, eco-friendly material.",
  },
  {
    id: 5,
    name: "Backpack",
    price: 1200,
    category: "Accessories",
    rating: 4.0,
    image: "https://placehold.co/300x200?text=Backpack",
    description: "Spacious with multiple compartments.",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 5500,
    category: "Electronics",
    rating: 4.6,
    image: "https://placehold.co/300x200?text=Smart+Watch",
    description: "Track fitness, notifications and more.",
  },
];

function StarRating({ rating }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: "0.9rem" }}>
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#6b7280", marginLeft: "4px" }}>({rating})</span>
    </span>
  );
}

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <span
          style={{
            fontSize: "0.75rem",
            background: "#eff6ff",
            color: "#3b82f6",
            padding: "2px 8px",
            borderRadius: "999px",
            alignSelf: "flex-start",
            fontWeight: 500,
          }}
        >
          {product.category}
        </span>
        <h3 style={{ margin: 0, fontSize: "1rem", color: "#111827" }}>{product.name}</h3>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#6b7280" }}>{product.description}</p>
        <StarRating rating={product.rating} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.75rem" }}>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#111827" }}>
            ৳ {product.price.toLocaleString()}
          </span>
          <button
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.85rem",
            }}
            onClick={() => alert(`"${product.name}" cart-এ যোগ হয়েছে!`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#111827", marginBottom: "0.25rem" }}>
        Our Products
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        {products.length}টি product পাওয়া গেছে
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
