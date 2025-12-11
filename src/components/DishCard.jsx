import RatingStars from "./RatingStars";
import { Button } from "react-bootstrap";

export default function DishCard({ dish, onDelete, currentUserId }) {
  if (!dish) return null;

  const isAuthor = dish.authorId === currentUserId;

  return (
    <div
      className="p-3 rounded h-100 text-start"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #f1e4d0",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <h3 className="h5 mb-1">{dish.name}</h3>

      <p className="mb-1 text-muted">
        {dish.place} • {dish.type}
      </p>

      <RatingStars rating={dish.rating} />

      <p className="mt-2">{dish.description}</p>

      {/* Delete only for author */}
      {onDelete && isAuthor && (
        <Button
          variant="outline-danger"
          size="sm"
          className="mt-2"
          onClick={() => {
            if (window.confirm("Delete your review?")) {
              onDelete(dish.id);
            }
          }}
        >
          Delete Review
        </Button>
      )}
    </div>
  );
}