import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRate] = useState(0);

  return (
    <div>
      <NavBar setSearch={setSearch} setRate={setRate} rating={rating} />
      <MoviesList rating={rating} search={search} />
    </div>
  );
}

export default App;
