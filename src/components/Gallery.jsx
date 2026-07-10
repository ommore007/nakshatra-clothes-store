import "../styles/Gallery.css";

function Gallery() {

  const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];
  return (
    <section className="gallery">

      <h2>
        Our Collection
      </h2>

      <div className="gallery-grid">

        {images.map((img,index)=>(

          <div className="gallery-item" key={index}>
            <img 
              src={img}
              alt="fashion"
            />
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;