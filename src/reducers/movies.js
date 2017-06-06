const movie = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        title: action.title,
        images: []
      };

    case 'ADD_IMAGE_TO_MOVIE':
      return {
        ...state,
        images: [...state.images, action.image]
      };

    default:
      return state;
  }
};

const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        movie(undefined, action)
      ];

    case 'DELETE_MOVIE':
      let newState = [ ...state];
      newState.splice(action.movieIndex, 1);
      return newState;

    case 'ADD_IMAGE_TO_MOVIE':
      return state.map( (m, index) => {
        if(index != action.movieIndex) {
          return movie(m, '');
        }
        else {
          return movie(m, action);
        }
      } );

    default:
      return state;
  }
};

export default movies;
