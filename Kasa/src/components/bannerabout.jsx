import background2 from "../assets/background2.svg";
import "../styles/bannerabout.scss";

export default function BannerAbout() {
  return (
    <div
      className="banner banner--about"
      style={{ backgroundImage: `url(${background2})` }}
    />
  );
}
