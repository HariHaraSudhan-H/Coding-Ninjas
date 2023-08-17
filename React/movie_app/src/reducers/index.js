import { ADD_FAVOURITES, ADD_MOVIES, REMOVE_FAVOURITES,CHANGE_MODE } from "../actions";

const InitialState = {
  list: [],
  favourites: [],
  isMovieMode: true,
};

export default function movies(state = InitialState, action) {
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
        favourites: state.favourites.filter(
          (favourite) => favourite.title !== action.favourites.title
        ),
      };
    case CHANGE_MODE:
        return {
            ...state,
            isMovieMode: action.isMovie
        }
    default:
      return state;
  }
}
