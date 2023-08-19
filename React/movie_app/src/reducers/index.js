import { combineReducers } from "redux";
import {
  ADD_FAVOURITES,
  ADD_MOVIES,
  REMOVE_FAVOURITES,
  CHANGE_MODE,
  ADD_SEARCH_RESULT,
  ADD_TO_MOVIES
} from "../actions";

const InitialMovieState = {
  list: [],
  favourites: [],
  isMovieMode: true,
};

export function movies(state = InitialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.favourites, ...state.favourites],
      };
    case REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: action.favourites,
      };
    case CHANGE_MODE:
      return {
        ...state,
        isMovieMode: action.isMovie,
      };
    case ADD_TO_MOVIES:
      return {
        ...state,
        list: [action.movie,...state.list],
      };
    default:
      return state;
  }
}
const InitialSearchState = {
  result: {},
};
export function search(state = InitialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
      };
    default:
      return state;
  }
}

const InitialRootState = {
  movies: InitialMovieState,
  search: InitialSearchState,
};
// export default function rootReducer(state=InitialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
  movies,
  search,
});
