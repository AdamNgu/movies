import { renderComponent, expect } from '../test_helper';
import ImageBadge from '../../src/components/image_badge';

describe('ImageBadge', () => {
  let component;

  beforeEach(() => {
    const props = { width: "100px", height: "150px", image: "placeholderURL" };
    const state = {movies: []}
    component = renderComponent(ImageBadge, props, state);
  });

  it('is an image element', () => {
    expect(component).to.match('img');
  });

  it('contains the class image-badge', () => {
    expect(component).to.have.class('image-badge');
  });

  it('shows the correct image', () => {
    expect(component).to.have.attr('src', "placeholderURL");
  });

  it('contains the correct maxWidth and maxHeight', () => {
    expect(component).to.have.css('max-width', '100px');
    expect(component).to.have.css('max-height', '150px');
  });
});
