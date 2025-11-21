import { Row, Col, Form } from "react-bootstrap";

const TYPES = ["All", "Sushi", "Coffee", "Ramen"];

export default function FilterBar({
  selectedType,
  onTypeChange,
  minRating,
  onMinRatingChange,
}) {
  return (
    <Row className="g-3">
      <Col xs={12} md={6}>
        <Form.Select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All food types" : t}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={12} md={6}>
        <Form.Range
          min={0}
          max={5}
          step={0.5}
          value={minRating}
          onChange={(e) => onMinRatingChange(Number(e.target.value))}
        />
        <div>Minimum rating: {minRating.toFixed(1)}★</div>
      </Col>
    </Row>
  );
}