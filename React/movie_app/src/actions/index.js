// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const CHANGE_MODE = 'CHANGE_MODE';

export const addMovies = (movies)=>{
    return ({
        type : ADD_MOVIES,
        movies
      })
}

export const addFavourites = (favourites)=>{
    return {
        type : ADD_FAVOURITES,
        favourites
    }
}

export const removeFavourites = (favourites)=>{
    return {
        type : REMOVE_FAVOURITES,
        favourites
    }
}

export const changeMode = (isMovie) =>{
    return {
        type: CHANGE_MODE,
        isMovie
    }
}