import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function SubmitReview({ onSubmitReview }) {
  const [lastSubmitted, setLastSubmitted] = useState(null);

  function handleSubmit(review) {
    onSubmitReview(review);
    setLastSubmitted(review);
  }

  return (
    <div>
      <h1 className="mb-3">Submit a Review</h1>
      <ReviewForm onSubmit={handleSubmit} />

      {lastSubmitted && (
        <div className="mt-4">
          <h2 className="h4">Thanks for sharing!</h2>
          <p>
            You reviewed <strong>{lastSubmitted.dish}</strong> at{" "}
            <strong>{lastSubmitted.place}</strong> with a rating of{" "}
            <strong>{lastSubmitted.rating} / 5</strong>.
          </p>
          <p>Your comment: {lastSubmitted.comment}</p>
        </div>
      )}
    </div>
  );
}