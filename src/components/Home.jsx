import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import DishCard from "./DishCard.jsx";
import HeroSection from "./HeroSection"; 

export default function Home({ dishes }){
  const [query, setQuery] = useState("");

  const popular = dishes.filter((d) => d.rating >= 4.5);
  const filtered = popular.filter((d) =>
    (d.name + d.place + d.type).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="mb-3">Best Bites in Madison</h1>
      <p>
        Discover top-rated dishes across Madison. Search for sushi, coffee,
        ramen, and more.
      </p>

      <Form className="my-3">
        <Form.Control
          type="search"
          placeholder="Search by dish, place, or type (e.g., 'sushi', 'coffee')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>

      <Row xs={1} md={2} lg={3} className="g-3">
        {filtered.map((dish) => (
          <Col key={dish.id}>
            <DishCard dish={dish} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
