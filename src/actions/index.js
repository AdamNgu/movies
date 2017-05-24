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
