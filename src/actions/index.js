export function addMovie(title) {
  return {
    type: 'ADD_MOVIE',
    title
  }
}

export function deleteMovie(movieIndex) {
  return {
    type: 'DELETE_MOVIE',
    movieIndex
  }
}

export function addImage(movieIndex, image) {
  return {
    type: 'ADD_IMAGE_TO_MOVIE',
    movieIndex,
    image
  }
}
