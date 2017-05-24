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

    default:
      return state
  }
}

export default movies
