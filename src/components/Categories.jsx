import "../styles/Categories.css";

function Categories({ setCategory }) {

 const categories = [
  {
    name: "Men",
    image:
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Women",
    image:
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1519238359922-989348752efb?auto=format&fit=crop&w=800&q=80",
  },
];


  return (
    <section className="categories" id="categories">

      <h2 data-aos="fade-up">
        Shop By Category
      </h2>


      <div className="category-grid">

        {categories.map((item,index)=>(

          <div
            className="category-card"
            key={index}
            data-aos="zoom-in"
            onClick={() => setCategory(item.name)}
          >

            <img
              src={item.image}
              alt={item.name}
            />


            <div className="overlay">

              <h3>
                {item.name}
              </h3>

            </div>


          </div>

        ))}


      </div>


    </section>
  );
}


export default Categories;