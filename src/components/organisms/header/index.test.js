import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import Header from './index';

describe('<Header />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should find semantic tags Header and Figure', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('figure')).toHaveLength(1);
  });

  it('Should render SearchInput component with empty value', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('SearchInput')).toHaveLength(1);
    expect(wrapper.find('SearchInput').props().value).toBe('');
  });
});
