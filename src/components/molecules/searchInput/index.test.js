import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

import SearchInput from './index';

describe('<SearchInput />', () => {
  const onSearch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Snapshot testing', () => {
    const { asFragment } = render(
      <SearchInput onSearch={onSearch} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should use atomic component Input', () => {
    const wrapper = shallow(
      <SearchInput onSearch={onSearch} />
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('Input')).toHaveLength(1);
  });

  it('Should call onSearch function if click in button', () => {
    const { getByTitle } = render(
      <SearchInput onSearch={onSearch} />
    );

    const button = getByTitle('Buscar');
    fireEvent.click(button);
    expect(onSearch).toBeCalled();
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('Should update inputText state if enter text on input', () => {
    const value = 'Hello';
    const wrapper = mount(
      <SearchInput value="term" onSearch={onSearch} />
    );

    wrapper.find('Input').simulate('change', {
      target: { value },
    });

    expect(wrapper.find('Input').props().value).toBe(value);
  });
});
