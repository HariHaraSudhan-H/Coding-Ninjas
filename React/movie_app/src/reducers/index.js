import { combineReducers } from "redux";
import { ADD_FAVOURITES, ADD_MOVIES, REMOVE_FAVOURITES,CHANGE_MODE } from "../actions";

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
const InitialSearchState = {
    result :{}
}
export function search(state=InitialSearchState,action){
    return state;
}

const InitialRootState = {
    movies : InitialMovieState,
    search : InitialSearchState
}
// export default function rootReducer(state=InitialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
})
