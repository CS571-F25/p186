import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function RatingStars({ rating }) {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#FFD700" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#FFD700" />);
    } else {
      stars.push(<FaRegStar key={i} color="#FFD700" />);
    }
  }

  return (
    <span style={{ display: "inline-flex", gap: "3px", alignItems: "center" }}>
      {stars}
      <span style={{ marginLeft: 6, fontSize: "0.9rem" }}>({rating})</span>
    </span>
  );
}