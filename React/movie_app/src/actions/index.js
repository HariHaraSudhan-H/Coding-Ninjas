// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const CHANGE_MODE = "CHANGE_MODE";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';

export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
export const addToMovies = (movie)=>{
    return {
        type : ADD_TO_MOVIES,
        movie
    }
}
export const addFavourites = (favourites) => {
  return {
    type: ADD_FAVOURITES,
    favourites,
  };
};

export const removeFavourites = (favourites) => {
  return {
    type: REMOVE_FAVOURITES,
    favourites,
  };
};

export const changeMode = (isMovie) => {
  return {
    type: CHANGE_MODE,
    isMovie,
  };
};

export function handleMovieSearch(movie) {
  const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);

        // dispatch an action
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
