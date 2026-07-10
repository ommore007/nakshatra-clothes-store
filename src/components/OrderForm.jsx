import { useState } from "react";
import "../styles/OrderForm.css";

function OrderForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitOrder = (e) => {
    e.preventDefault();

    alert(
      `Order Received!\nName: ${form.name}\nPhone: ${form.phone}`
    );

    setForm({
      name: "",
      phone: "",
      address: ""
    });
  };


  return (
    <section className="order" id="order">

      <h2>
        Place Your Order
      </h2>

      <form onSubmit={submitOrder}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Confirm Order ✅
        </button>

      </form>

    </section>
  );
}

export default OrderForm;