let currentMovieId = 0
export function addMovie(title) {
  return {
    type: 'ADD_MOVIE',
    id: currentMovieId ++,
    title
  }
}

export function selectMovie(movie) {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  }
}

export function deleteMovie(movie) {
  return {
    type: 'DELETE_MOVIE',
    id: movie.id
  }
}
