import { renderComponent, expect } from '../test_helper';
import ImageBadge from '../../src/components/image_badge';

describe('ImageBadge', () => {
  let component;

  beforeEach(() => {
    const props = { width: "100px", height: "150px", image: "placeholderData" };
    const state = {movies: []}
    component = renderComponent(ImageBadge, props, state);
  });

  it('shows an image', () => {
    expect(component).to.match('img');
  });

  it('contains the correct maxWidth and maxHeight', () => {
    expect(component).to.have.css('max-width', '100px');
    expect(component).to.have.css('max-height', '150px');
  });
});
