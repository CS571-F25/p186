import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function SubmitReview() {
  const [lastSubmitted, setLastSubmitted] = useState(null);

  return (
    <div>
      <h1 className="mb-3">Submit a Review</h1>
      <ReviewForm onSubmit={setLastSubmitted} />
      {lastSubmitted && (
        <div className="mt-4">
          <h4>Thanks for sharing!</h4>
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