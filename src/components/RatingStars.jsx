export default function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const totalStars = 5;

  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) stars.push("★");
    else if (i === fullStars && hasHalf) stars.push("☆"); 
    else stars.push("☆");
  }

  return (
    <span aria-label={`Rating: ${rating} out of 5`} role="img">
      {stars.join(" ")}{" "}
      <span style={{ fontSize: "0.9rem" }}>({rating.toFixed(1)})</span>
    </span>
  );
}