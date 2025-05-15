import { useParams } from "react-router-dom";

export default function Logement() {
  const { id } = useParams();

  return (
    <div className="logement">
      <h1>Fiche logement</h1>
      <p>ID du logement : {id}</p>
    </div>
  );
}
