import "../styles/host.scss";

export default function Host({ host }) {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="host">
      <div className="host__name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img src={host.picture} alt={host.name} className="host__picture" />
    </div>
  );
}
