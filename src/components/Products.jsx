import { useState } from "react";
import "../styles/Products.css";
import products from "../data/product";

function Products({ search = "", category = "All", addToCart }) {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const buyNow = (item) => {

    const message = `Hello Nakshatra Collection,

I want to buy:

Product: ${item.name}
Price: ₹${item.price}

Please share more details.`;

    window.open(
      `https://wa.me/919834355600?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const filteredProducts = products.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="products" id="products">

      <h2 data-aos="fade-up">
        Featured Collection
      </h2>

      <div className="product-grid">

        {filteredProducts.map((item) => (

          <div
            className="product-card"
            key={item.id}
            data-aos="zoom-in"
          >

            <span className="discount">
              20% OFF
            </span>

            <span className="tag">
              {item.tag}
            </span>

            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onClick={() => setSelectedProduct(item)}
            />

            <div className="product-info">

              <h3>{item.name}</h3>

              <div className="rating">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="price">
                ₹{item.price}
              </p>

              <button
                onClick={() => addToCart(item)}
              >
                Add to Cart 🛒
              </button>

            </div>

          </div>

        ))}

      </div>

      {selectedProduct && (

        <div
          className="quick-view"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="quick-box"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <h2>{selectedProduct.name}</h2>

            <p className="price">
              ₹{selectedProduct.price}
            </p>

            <div className="product-buttons">

              <button
                onClick={() => addToCart(selectedProduct)}
              >
                Add to Cart 🛒
              </button>

              <button
                className="buy-btn"
                onClick={() => buyNow(selectedProduct)}
              >
                Buy Now ⚡
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Products;