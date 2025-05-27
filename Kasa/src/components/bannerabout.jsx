import background2 from "../assets/background2.svg";
import "../styles/bannerabout.scss";

export default function BannerAbout() {
  return (
    <div className="banner--about">
      <div
        className="banner--about__inner"
        style={{ backgroundImage: `url(${background2})` }}
      >
        {/* Pas de texte selon votre maquette */}
      </div>
    </div>
  );
}
