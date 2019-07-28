import { createElement } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * Create an enzyme wrapper of the supplied component
 *
 * @param {Node} component - a React component
 * @param {Object} props - props for the component
 * @param {String} renderMethod - the render method used to create the wrapper
 *
 *@returns {Object} an object containing the relevant wrappers
 */
function setup(component, props, renderMethod = 'shallow') {
  const element = createElement(component, props);

  switch (renderMethod) {
    case 'all':
      const shallowWrapper = shallow(element);
      const mountWrapper = mount(element);
      return { shallowWrapper, mountWrapper };

    case 'mount':
      const mountWrapper = mount(element);
      return { mountWrapper };

    default:
      const shallowWrapper = shallow(element);
      return { shallowWrapper };
  }
}

global.setup = setup;
