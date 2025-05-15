import BannerHome from "../components/bannerhome";
import Card from "../components/card";
import logements from "../data/logements.json";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home">
      <BannerHome />
      <div className="home__grid">
        {logements.slice(0, 6).map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}
