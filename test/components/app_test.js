import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders', () => {
    expect(component).to.exist;
  });

  it('contains a header', () => {
    expect(component.find('header')).to.exist;
  });

  it('contains a button to access the new movie modal', () => {
    expect(component.find('button.open-new-movie-modal')).to.exist;
  });

  describe('click the new movie button', () => {
    beforeEach(() => {
      const btnNode = component.find('button.open-new-movie-modal');
      TestUtils.Simulate.click(btnNode);
    });

    // TODO: find method to properly test react-modal elements
    // it('contains a new movie form when activated', () => {
    //   expect(component.find('.new-movie-modal')).to.exist;
    // });
  });

  it('contains an index of movies', () => {
    expect(component.find('.movie-index')).to.exist;
  });

});
