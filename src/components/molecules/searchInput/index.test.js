import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

import SearchInput from './index';

describe('<SearchInput />', () => {
  const onSearch = jest.fn();

  it('Snapshot testing', () => {
    const { asFragment } = render(
      <SearchInput onSearch={onSearch} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Snapshot testing', () => {
    const { getByTitle } = render(
      <SearchInput onSearch={onSearch} />
    );

    const button = getByTitle('Buscar');
    fireEvent.click(button);
    expect(onSearch).toBeCalled();
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('Should use atomic component Input', () => {
    const wrapper = shallow(
      <SearchInput onSearch={onSearch} />
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('Input')).toHaveLength(1);
  });
});
