import OrderForm from "./components/OrderForm";
import Cart from "./components/Cart";
import { useState } from "react";
import "./styles/App.css";
import Gallery from "./components/Gallery";
import WhatsApp from "./components/Whatsapp";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";
import ScrollTop from "./components/ScrollTop";
import "./styles/Responsive.css";

function App() {

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        cart={cart}
      />

      <Hero />

      <WhyChoose />

      <Categories setCategory={setCategory} />

      <Products
        search={search}
        category={category}
        addToCart={addToCart}
      />

      <Gallery />

      <Reviews />

      <Cart
        cart={cart}
        setCart={setCart}
      />

      <OrderForm />

      <Contact />

      <Footer />

      <WhatsApp />

      <ScrollTop />
    </>
  );
}

export default App;