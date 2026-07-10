import "../styles/Cart.css";

function Cart({ cart, setCart }) {

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section className="cart" id="cart">

      <h2>
        Your Cart 🛒
      </h2>

      {cart.length === 0 ? (
        <p>
          Cart is empty
        </p>
      ) : (

        <>
          <div className="cart-items">

            {cart.map((item, index) => (

              <div className="cart-card" key={index}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <button
                    onClick={() => removeItem(index)}
                  >
                    Remove ❌
                  </button>

                </div>

              </div>

            ))}

          </div>

          <h3 className="total">
            Total: ₹{total}
          </h3>

        </>
      )}

    </section>
  );
}

export default Cart;