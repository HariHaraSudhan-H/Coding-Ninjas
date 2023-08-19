import {connect} from 'react-redux';
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React, { useEffect } from "react";
import { addMovies, changeMode } from "../actions";
import movies from '../reducers';
import { StoreContext } from '../index';
import NavbarWrapper from './Navbar';

class App extends React.Component {
  movies = this.props.store.getState().movies;
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      // console.log("UPDATED");
      // this.forceUpdate(); 
    });
    store.dispatch(addMovies(data));
    console.log(store.dispatch(addMovies(data)))

  }

  isFavourite(movie) {
    const { favourites } = this.props.store.getState().movies;

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
    const {movies,search} = this.props.store.getState();
    const  displayMovies = movies.isMovieMode ? movies.list: movies.favourites;
    // console.log(displayMovies);
    console.log("Updated State", this.props.store.getState());
    return (
      <div className="App">
        <NavbarWrapper dispatch={this.props.store.dispatch} search={search}/>
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

class AppWrapper extends React.Component{
  render(){
    return (
      <StoreContext.Consumer>
        {(store)=><App store={store}/>}
      </StoreContext.Consumer>
    )
  }
}
export default connect(movies)(AppWrapper);
