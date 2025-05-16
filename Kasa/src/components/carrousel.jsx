import { useState } from "react";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";
import "../styles/carrousel.scss";

export default function Carrousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!pictures || length === 0) return null;

  return (
    <div className="carrousel">
      <img
        src={pictures[current]}
        alt={`logement ${current + 1}`}
        className="carrousel__image"
      />

      {length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="précédent"
            className="carrousel__arrow carrousel__arrow--left"
            onClick={prevSlide}
          />
          <img
            src={rightArrow}
            alt="suivant"
            className="carrousel__arrow carrousel__arrow--right"
            onClick={nextSlide}
          />
          <div className="carrousel__counter">
            {current + 1}/{length}
          </div>
        </>
      )}
    </div>
  );
}
