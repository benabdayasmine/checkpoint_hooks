import React from "react";
import { Card } from "semantic-ui-react";
import "./styles.css";
function MovieCard({ title, imgUrl, rating, desc, cast }) {
  return (
    <Card
      image={imgUrl}
      header={title}
      meta={"⭐".repeat(rating)}
      description={desc}
      extra={<span>Cast : {cast}</span>}
      className="movie-card"
    />
  );
}

export default MovieCard;
