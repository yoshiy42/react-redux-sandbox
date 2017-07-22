/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Root from 'components/root';

let props;
let wrapper;

describe('Root component', () => {
  beforeEach(() => {
    props = {
      root: {
        counter: 0
      },
      rootActions: {
        increment: sinon.spy(),
        decrement: sinon.spy()
      }
    };
    wrapper = shallow(<Root {...props} />);
  });

  it('should render Root DOM', () => {
    assert(wrapper.find('.root').length === 1);
    assert(wrapper.find('.btn--counter__increment').length === 1);
    assert(wrapper.find('.btn--counter__decrement').length === 1);
  });

  context('when click increment button', () => {
    it('should execute increment function', () => {
      wrapper.find('.btn--counter__increment').simulate('click');
      assert(props.rootActions.increment.calledOnce === true);
    });
  });

  context('when click decrement button', () => {
    it('should execute decrement function', () => {
      wrapper.find('.btn--counter__decrement').simulate('click');
      assert(props.rootActions.decrement.calledOnce === true);
    });
  });
});
