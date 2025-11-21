export default function RatingStars({ rating }) {
    const fullStars = Math.floor(rating);
    const half = rating - fullStars >= 0.5;
    const totalStars = 5;
  
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < fullStars) stars.push("★");
      else if (i === fullStars && half) stars.push("☆"); // pseudo half
      else stars.push("☆");
    }
  
    return (
      <span aria-label={`Rating: ${rating} out of 5`}>
        {stars.join(" ")} <span style={{ fontSize: "0.9rem" }}>({rating})</span>
      </span>
    );
  }