import background from "../assets/background.svg";
import "../styles/bannerhome.scss";

export default function BannerHome() {
  return (
    <div
      className="banner banner--home"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}
