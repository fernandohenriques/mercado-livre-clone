import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import Input from './index';

describe('<Input />', () => {
  const placeholder = 'Enter text here...';

  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Input type="text" placeholder={placeholder} autofocus />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should props autofocus as default false', () => {
    const wrapper = mount(<Input type="text" placeholder={placeholder} />);

    expect(wrapper.props().autofocus).toBe(false);
  });

  it('Should render props type, placeholder and value on native input', () => {
    const defaultValue = 'Hello';
    const { getByPlaceholderText } = render(
      <Input type="text" defaultValue={defaultValue} placeholder={placeholder} />
    );
    const input = getByPlaceholderText(placeholder);

    expect(input.type).toBe('text');
    expect(input.value).toBe(defaultValue);
    expect(input.placeholder).toBe(placeholder);
  });
});
