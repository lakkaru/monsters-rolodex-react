import "./card-list.styles.css";
import Card from "../card/card-component";

const Cardlist = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, key) => {
        return <Card key={key} monster={monster} />;
      })}
    </div>
  );
};
export default Cardlist;
