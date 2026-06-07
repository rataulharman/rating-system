import { useState } from "react";
import Star from "./Star";

function StarRating() {
  const [rating, setRating] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
}

export default StarRating;