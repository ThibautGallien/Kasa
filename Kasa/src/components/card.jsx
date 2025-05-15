import { Link } from "react-router-dom";
import "../styles/card.scss";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className="card__title">{title}</div>
    </Link>
  );
}
