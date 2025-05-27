import logoFooter from "../assets/logo-footer.svg";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logoFooter} alt="Logo Kasa blanc" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
