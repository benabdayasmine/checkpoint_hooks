import React, { useState } from "react";

import { Button, Form } from "semantic-ui-react";
import "./styles.css";
import MovieCard from "./MovieCard";
import { data } from "../data";

function MoviesList({ search, rating }) {
  const [movies, setMovies] = useState(data);
  const [newMovie, setNewMovie] = useState({});

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div id="movies-list-container">
      <h1>Top movies</h1>
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setNewMovie({ ...newMovie, title: e.target.value });
              }}
            />
            <Form.Input
              type="text"
              placeholder="Movie poster url"
              onChange={(e) => {
                setNewMovie({ ...newMovie, imgUrl: e.target.value });
              }}
            />
            <Form.Input
              type="number"
              min={1}
              max={5}
              onChange={(e) => {
                setNewMovie({ ...newMovie, rating: e.target.value });
              }}
            />
            <Form.Input
              type="text"
              placeholder="Resume"
              onChange={(e) => {
                setNewMovie({ ...newMovie, desc: e.target.value });
              }}
            />
            <Form.Input
              type="text"
              placeholder="Cast"
              onChange={(e) => {
                setNewMovie({ ...newMovie, cast: e.target.value });
              }}
            />
          </Form.Group>
          <Button
            onClick={() => {
              handleAddMovie();
            }}
          >
            Add Movie
          </Button>
        </Form>
      </div>
      <div className="movies-list-cards-container">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((movie) => (rating ? movie.rating === rating : movie))
          .map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))}
      </div>
    </div>
  );
}

export default MoviesList;
