import "./beercard.css";

export default function BeerCard({ beer }) {
  //beer destructured from props.beer
  return (
    <div className="beerCard">
      <img src={beer.image} alt="" />
      {/* put alt tag as blank image since will not know what looks like at this time */}
      <h2>{beer.name}</h2>
      <p>{beer.price}</p>
      <li>{beer.name}</li>
    </div>
  );
}
