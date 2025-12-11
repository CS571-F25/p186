import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import DishCard from "./DishCard";
import FilterBar from "./FilterBar";

export default function Browse({ dishes, onDelete, currentUserId }) {
  const [type, setType] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("newest");


  const foodTypes = Array.from(
    new Set(dishes.map((d) => d.type.trim()))
  ).sort();

  const filteredDishes = dishes
    .filter((d) => {
      const typeOk = type === "All" || d.type === type;
      const ratingOk = d.rating >= minRating;
      return typeOk && ratingOk;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "alpha") return a.name.localeCompare(b.name);
      if (sortBy === "newest") return b.createdAt - a.createdAt;
      return 0;
    });

  return (
    <div>
      <h1 className="mb-3">Browse Dishes</h1>

      <FilterBar
        selectedType={type}
        onTypeChange={setType}
        minRating={minRating}
        onMinRatingChange={setMinRating}
        types={foodTypes} 
      />

      <Form.Group className="mt-3 mb-3" controlId="sort">
        <Form.Label>Sort by</Form.Label>
        <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="rating">Highest Rating</option>
          <option value="alpha">Alphabetical (A–Z)</option>
        </Form.Select>
      </Form.Group>

      <Row xs={1} md={2} lg={3} className="g-3">
        {filteredDishes.map((dish) => (
          <Col key={dish.id}>
            <DishCard
              dish={dish}
              onDelete={onDelete}
              currentUserId={currentUserId}
            />
          </Col>
        ))}
      </Row>

  
      {filteredDishes.length === 0 && (
        <p className="mt-4 text-muted">
          No dishes match your filters. Try adjusting the rating or type filter.
        </p>
      )}
    </div>
  );
}
