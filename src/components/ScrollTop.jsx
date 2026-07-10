import { useEffect, useState } from "react";
import "../styles/ScrollTop.css";

function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          className="scroll-top"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollTop;