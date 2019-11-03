import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import SuperCard from './index';

describe('<SuperCard />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(
      <SuperCard>
        <div>Awesome content</div>
      </SuperCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should use props className as CSS class', () => {
    const wrapper = mount(
      <SuperCard className="super-card">
        <div>Other awesome content</div>
      </SuperCard>
    );

    expect(wrapper.find('.container').hasClass('super-card')).toBe(true);
  });
});
