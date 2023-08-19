import React from "react";
import { addFavourites, removeFavourites } from "../actions";

class MovieCard extends React.Component {
  handleFavourite = (e) => {
    e.preventDefault();
    // let favourites = this.props.store.getState().favourites;
    // const index = favourites.indexOf(this.props.movie);
    // if (index !== -1) {
    //   favourites.push(this.props.movie);
    // }else{
    //     favourites = favourites.filter((movie)=>movie.title!==this.props.movie.title);
    // }
    this.props.store.dispatch(addFavourites(this.props.movie));
  };

  handleUnFavourite = ()=>{
    const newFavourites = this.props.store.getState().movies.favourites.filter(
      (favourite) => favourite.Title !== this.props.movie.Title
    )
    console.log(this.props.movie.Title)
    this.props.store.dispatch(removeFavourites(newFavourites))
  }

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button className="unfavourite-btn" onClick={this.handleUnFavourite}>
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.handleFavourite}>
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
