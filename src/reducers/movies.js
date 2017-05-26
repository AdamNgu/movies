const movie = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        id: action.id,
        title: action.title,
        images: []
      }

    case 'ADD_IMAGE_TO_MOVIE':
      if(state.id !== action.id){
        return state
      }

      return {
        ...state,
        images: [...state.images, action.image]
      }

    default:
      return state
  }
}

const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      action.id = state[state.length-1].id + 1
      return [
        ...state,
        movie(undefined, action)
      ]

    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id !== action.id)

    case 'ADD_IMAGE_TO_MOVIE':
      return state.map( (m) => movie(m, action) );

    default:
      return state
  }
}

export default movies
