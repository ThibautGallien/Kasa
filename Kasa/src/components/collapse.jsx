import { useState } from "react";
import arrow from "../assets/arrow-up.svg";
import "../styles/collapse.scss";

export default function Collapse({ title, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse__title">{title}</span>
        <img
          src={arrow}
          alt="toggle arrow"
          className={`collapse__arrow ${isOpen ? "rotate" : ""}`}
        />
      </div>

      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <p>{children}</p>
      </div>
    </div>
  );
}
