import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ search, setSearch, cart }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Nakshatra
        <span>COLLECTION</span>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="nav-right">

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <div className="cart-icon">
          🛒 {cart.length}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;