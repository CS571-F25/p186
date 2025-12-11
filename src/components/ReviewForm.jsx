import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ReviewForm({ onSubmit }) {
  const [dish, setDish] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const review = { dish, place, type, rating: Number(rating), comment };
    onSubmit?.(review);
    setDish("");
    setPlace("");
    setType("");
    setRating(4);
    setComment("");
  }

  return (
    <Form onSubmit={handleSubmit} aria-label="Submit a food review">
      <Form.Group className="mb-3" controlId="review-dish">
        <Form.Label>Dish name</Form.Label>
        <Form.Control
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          required
          placeholder="e.g., Spicy Tuna Roll"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="review-place">
        <Form.Label>Restaurant / café</Form.Label>
        <Form.Control
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
          placeholder="e.g., Sushi Express"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="review-type">
        <Form.Label>Food type</Form.Label>
        <Form.Control
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          placeholder="e.g., Sushi, Coffee, Ramen"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="review-rating">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          aria-label="Select a rating from 1 to 5"
        >
          {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1].map((r) => (
            <option key={r} value={r}>
              {r} / 5
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="review-comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What did you like (or not like) about this dish?"
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Submit Review
      </Button>
    </Form>
  );
}