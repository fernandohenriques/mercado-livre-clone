import React from 'react';
import { mount, render as renderDOM } from 'enzyme';
import { render } from '@testing-library/react';
import Input from './index';

describe('<Input />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Input type="text" placeholder="Search products..." autofocus />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should use props className as CSS class', () => {
    const wrapper = renderDOM(
      <Input type="text" className="test-input" />
    );

    expect(wrapper.hasClass('input')).toBe(true);
    expect(wrapper.hasClass('test-input')).toBe(true);
  });

  it('Should props autofocus as default false', () => {
    const wrapper = mount(
      <Input type="text" placeholder="Enter text here..." />
    );

    expect(wrapper.props().autofocus).toBe(false);
  });
});
