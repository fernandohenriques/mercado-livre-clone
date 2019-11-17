import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import Price from './index';

describe('<Price />', () => {
  it('Snapshot testing with medium size', () => {
    const { asFragment } = render(
      <Price amount={2999} decimals={9} size="medium" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Snapshot testing with large size', () => {
    const { asFragment } = render(
      <Price amount={145} decimals={50} size="large" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should use class medium if dont pass props size', () => {
    const wrapper = mount(<Price amount={200} decimals={99} />);

    expect(wrapper.find('.price').hasClass('medium')).toBe(true);
  });
});
