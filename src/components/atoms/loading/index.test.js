import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import Loading from './index';

describe('<Loading />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(<Loading />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should use props className as CSS class', () => {
    const wrapper = mount(<Loading />);
    const div = wrapper.find('div');

    expect(div).toHaveLength(1);
    expect(div.hasClass('loading')).toBe(true);
  });
});
