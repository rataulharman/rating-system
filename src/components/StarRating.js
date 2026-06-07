import { useState } from "react";
import Star from "./Star";

function StarRating() {
  const [rating, setRating] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

function getText(rating) {
    if (rating === 1) return "Poor";
    if (rating === 2) return "Fair";
    if (rating === 3) return "Good";
    if (rating === 4) return "Very Good";
    if (rating === 5) return "Excellent";
    return "";
    }

  return (
    <div className="star-container">
        <h2 className="rating-text">{getText(rating)}</h2>

        <div className="stars">
        {[1, 2, 3, 4, 5].map((item, index) => (
            <Star
            key={index}
            selected={index < rating}
            onClick={() => handleClick(index + 1)}
            />
        ))}
        </div>
    </div>
);
}

export default StarRating;