import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monsters ${name}`}
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
