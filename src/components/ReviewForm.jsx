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
    // Reset form
    setDish("");
    setPlace("");
    setType("");
    setRating(4);
    setComment("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Dish name</Form.Label>
        <Form.Control
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Restaurant / café</Form.Label>
        <Form.Control
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Food type (sushi, coffee, ramen…)</Form.Label>
        <Form.Control
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1].map((r) => (
            <option key={r} value={r}>
              {r} / 5
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Submit Review
      </Button>
    </Form>
  );
}