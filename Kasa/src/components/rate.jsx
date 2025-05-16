import "../styles/rate.scss";
import star from "../assets/empty-star.svg";

export default function Rate({ rating }) {
  const totalStars = 5;

  return (
    <div className="rate">
      {Array.from({ length: totalStars }).map((_, index) => (
        <img
          key={index}
          src={star}
          alt="étoile"
          className={`rate__star ${index < rating ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
