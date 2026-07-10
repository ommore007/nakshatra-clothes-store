import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-box">

        <h2>Contact Us</h2>

        <p>
          Have questions about our collection?
          We're always happy to help.
        </p>

        <div className="contact-info">

          <div>
            <h3>📍 Store</h3>
            <p>Nakshatra Collection</p>
            <p>Nisarale Phata, Satara</p>
          </div>

          <div>
            <h3>📞 WhatsApp</h3>
            <p>+91 98343 55600</p>
          </div>

          <div>
            <h3>🚚 Delivery</h3>
            <p>All India Delivery Available</p>
          </div>

        </div>

        <div className="contact-buttons">

          <a
            href="https://wa.me/919834355600"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 Order on WhatsApp
          </a>

          <a
            href="https://www.instagram.com/nakshtra_collection_"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            📷 Follow on Instagram
          </a>

        </div>

        <div className="map-section">

          <div className="store-details">

            <h3>📍 Visit Our Store</h3>

            <p>
              Nakshatra Collection <br />
              Nisrale - Targaon Road <br />
              Nagthane, Khodad <br />
              Satara - 415519
            </p>

            <p><strong>📞 WhatsApp:</strong> +91 98343 55600</p>

            <p><strong>🚚 Delivery:</strong> All India Delivery Available</p>

          </div>

          <iframe
            title="Nakshatra Collection"
            src="https://www.google.com/maps?q=Nisrale%20-%20Targaon%20Rd,%20Nagthane,%20Khodad,%20Maharashtra%20415519&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;