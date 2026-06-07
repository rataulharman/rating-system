import Star from "./Star";

function StarRating() {
  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Star key={index} />
      ))}
    </div>
  );
}

export default StarRating;