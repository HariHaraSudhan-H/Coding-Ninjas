import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React, { useEffect } from "react";
import { addMovies, changeMode } from "../actions";
class App extends React.Component {
  movies = this.props.store.getState();
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log("UPDATED");
      console.log("Updated State", store.getState());
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }

  isFavourite(movie) {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    return index !== -1 ? true : false;
  }

  handleMovie = () => {
    const { store } = this.props;

    store.dispatch(changeMode(true));
  };

  handleFavourites = () => {
    const { store } = this.props;

    store.dispatch(changeMode(false));
  };

  render() {
    const  displayMovies = this.movies.isMovieMode ? this.movies.list: this.movies.favourites;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${this.movies.isMovieMode? 'active-tabs':''}`} onClick={this.handleMovie}>
              Movies
            </div>
            <div className={`tab ${this.movies.isMovieMode? '':'active-tabs'}`} onClick={this.handleFavourites}>
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
                  return (
                    <MovieCard
                      movie={movie}
                      key={`movies-${index}`}
                      store={this.props.store}
                      isFavourite={this.isFavourite(movie)}
                    />
                  );
                })}
          </div>
          {displayMovies.length===0?<div className="no-movies">No movies to display...</div>:null}
        </div>
      </div>
    );
  }
}

export default App;
