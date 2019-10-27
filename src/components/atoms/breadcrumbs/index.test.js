import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import Breadcrumbs from './index';

describe('<Breadcrumbs />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Breadcrumbs categories={['Eletronica y Audio', 'iPod', 'reproductores', '32 GB']} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the last item with strong tag and others with span tag', () => {
    const lastItem = '32 GB';
    const wrapper = shallow(
      <Breadcrumbs categories={['Eletronica y Audio', 'iPod', 'reproductores', 'iPod touch', lastItem]} />
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('span')).toHaveLength(4);
    expect(wrapper.find('strong')).toHaveLength(1);
    expect(wrapper.find('strong').text()).toEqual(lastItem);
  });
});
