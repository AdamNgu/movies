import { expect } from '../test_helper';

import { addMovie, deleteMovie, addImage } from '../../src/actions';

describe('Actions', () => {
  describe('addMovie', () => {
    it('passes the correct type', () => {
      const action = addMovie();
      expect(action.type).to.equal('ADD_MOVIE');
    });

    it('passes the film title to the action', () => {
      const action = addMovie('new movie title');
      expect(action.title).to.equal('new movie title');
    });
  });

  describe('deleteMovie', () => {
    it('passes the correct type', () => {
      const action = deleteMovie();
      expect(action.type).to.equal('DELETE_MOVIE');
    });

    it('passes the movie index in array', () => {
      const action = deleteMovie(5);
      expect(action.movieIndex).to.equal(5);
    });
  });

  describe('addImage', () => {
    it('passes the correct type', () => {
      const action = addImage();
      expect(action.type).to.equal('ADD_IMAGE_TO_MOVIE');
    });

    it('passes the movie index in array', () => {
      const imageDataPlaceholder = "the quick brown fox"
      const action = addImage(5, imageDataPlaceholder);
      expect(action.movieIndex).to.equal(5);
    });

    it('passes the image', () => {
      const imageDataPlaceholder = "the quick brown fox"
      const action = addImage(5, imageDataPlaceholder);
      expect(action.image).to.equal(imageDataPlaceholder);
    });
  });
});
