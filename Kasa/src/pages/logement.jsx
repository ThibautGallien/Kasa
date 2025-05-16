import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Carrousel from "../components/Carrousel";
import Host from "../components/host";
import Rate from "../components/rate";
import Tag from "../components/tag";
import Collapse from "../components/collapse";
import "../styles/logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // Redirection si aucun logement ne correspond
  if (!logement) return <Navigate to="/404" />;

  return (
    <div className="logement">
      <Carrousel pictures={logement.pictures} />

      <div className="logement__main">
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className="logement__side">
          <Host host={logement.host} />
          <Rate rating={parseInt(logement.rating)} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
