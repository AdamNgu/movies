import { expect } from '../test_helper';
import movieReducer from '../../src/reducers/movies';

describe('Movies Reducer', () => {
  it('handles action with unknown type', () => {
    expect(movieReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type ADD_MOVIE', () => {
    const action = { type: 'ADD_MOVIE', title: 'new_movie' };
    const state = [];
    expect(movieReducer(state, action)).to.eql([{
      title: 'new_movie',
      images: []
    }]);
  });

  it('handles action of type DELETE_MOVIE', () => {
    const action = { type: 'DELETE_MOVIE' };
    const state = [ { title: 'new_movie', images: [] } ];
    expect(movieReducer(state, action)).to.eql([]);
  });

  it('handles action of type ADD_IMAGE_TO_MOVIE', () => {
    const action = { type: 'ADD_IMAGE_TO_MOVIE', movieIndex: 1, image: "dummy data" };
    const state = [
      { title: 'Star Wars', images: [] },
      { title: 'Amelie', images: [] },
    ];
    const desiredState = [
      { title: 'Star Wars', images: [] },
      { title: 'Amelie', images: ["dummy data"] },
    ];
    expect(movieReducer(state, action)).to.eql(desiredState);
  });
});
