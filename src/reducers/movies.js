const movie = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        id: action.id,
        title: action.title,
      }

    default:
      return state
  }
}

const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        movie(undefined, action)
      ]

    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id !== action.id)

    default:
      return state
  }
}

export default movies
