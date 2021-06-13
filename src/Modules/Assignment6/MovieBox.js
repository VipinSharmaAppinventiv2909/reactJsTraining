import React from "react";
import "./index.css";
const MovieBox = React.memo((props) => {
  //const { image, movieName, releaseDate, rating } = this.props;
  console.log("cardRendered" + props.image);
  return (
    <div className={"movieContainer"}>
      <div className={"movieWrapper"}>
        <img src={props.image} className={"setImage"} />

        <div className={"movieContent"}>
          <h3 className={"movieName"}>{props.movieName}</h3>
          <p className={"releaseDate"}>releaseDate : {props.releaseDate}</p>
          <p className={"movieRating"}>rating : {props.rating}</p>
        </div>
      </div>
    </div>
  );
});
export default MovieBox;
