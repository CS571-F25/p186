import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { DISHES } from "../data/dishes";
import DishCard from "./DishCard";
import FilterBar from "./FilterBar";

export default function Browse() {
  const [type, setType] = useState("All");
  const [minRating, setMinRating] = useState(0);

  const dishes = DISHES.filter((d) => {
    const typeOk = type === "All" || d.type === type;
    const ratingOk = d.rating >= minRating;
    return typeOk && ratingOk;
  });

  return (
    <div>
      <h1 className="mb-3">Browse Dishes</h1>
      <FilterBar
        selectedType={type}
        onTypeChange={setType}
        minRating={minRating}
        onMinRatingChange={setMinRating}
      />
      <Row xs={1} md={2} lg={3} className="g-3 mt-3">
        {dishes.map((dish) => (
          <Col key={dish.id}>
            <DishCard dish={dish} />
          </Col>
        ))}
      </Row>
    </div>
  );
}