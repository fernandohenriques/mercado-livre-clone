import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import Divider from './index';

describe('<Divider />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(<Divider />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Never render children', () => {
    const wrapper = shallow(
      <Divider>
        <div>children</div>
      </Divider>
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.children()).toHaveLength(0);
  });
});
