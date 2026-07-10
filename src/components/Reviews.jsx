import "../styles/Reviews.css";

function Reviews() {

  const reviews = [
    {
      name: "Priya Sawant",
      text: "Amazing quality and beautiful collection!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Rahul Patil",
      text: "Premium fabric and fast delivery.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sneha More",
      text: "Loved the designs. Will shop again!",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];


  return (
    <section className="reviews">

      <h2>Customer Reviews</h2>

      <div className="review-grid">

        {reviews.map((review,index)=>(
          <div className="review-card" key={index}>

            <div className="stars">
              {review.rating}
            </div>

            <p>
              "{review.text}"
            </p>

            <h3>
              {review.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Reviews;