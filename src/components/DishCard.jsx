export default function DishCard({ dish }) {
    if (!dish) {
      return <div>DishCard: no dish provided</div>;
    }
  
    return (
      <div>
        <h3>{dish.name}</h3>
        <p>
          {dish.place} • {dish.type}
        </p>
        <p>Rating: {dish.rating}</p>
        <p>{dish.description}</p>
      </div>
    );
  }