import { renderComponent, expect } from '../test_helper';
import MoviesIndex from '../../src/containers/movies_index';

describe('MoviesIndex', () => {
  let component;

  beforeEach(() => {
    const props = { };
    const state = {
      movies: [
        {title: 'Spongebob Squarepants', images: ['placeholderData'] },
        {title: 'Jumanji', images: ['placeholderData2', 'placeholderData3'] },
      ]
    };
    component = renderComponent(MoviesIndex, props, state);
  });

  it('creates a div for each movie', () => {
    expect(component.find('div.movie-item').length).to.equal(2);
  });

  it('displays the title and first image for a movie', () => {
    expect(component.find('.movie-title')).to.have.html('Spongebob Squarepants')
    expect(component.find('.image-badge')).to.have.attr('src', 'placeholderData')
  });

});
