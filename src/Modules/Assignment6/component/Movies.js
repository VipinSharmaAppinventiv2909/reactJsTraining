import React, { useEffect, useState } from "react";
import MovieBox from "../MovieBox";
import "../index.css";
export default function Movie() {
  const [movieRating, setMovieRating] = useState(1);
  setTimeout(() => {
    setMovieRating(movieRating + 0.3);
  }, 5000);
  return (
    <div className={"mainConatiner"}>
      <MovieBox
        image="dark.jpeg"
        movieName={"dark"}
        releaseDate={"21 June"}
        rating={movieRating}
      />
      <MovieBox
        image="intersteller.jpeg"
        movieName={"Intersteller"}
        releaseDate={"22 June"}
        rating={"3"}
      />
      <MovieBox
        image="fightClub.jpeg"
        movieName={"fightClub"}
        releaseDate={"23 June"}
        rating={"4"}
      />
    </div>
  );
}
