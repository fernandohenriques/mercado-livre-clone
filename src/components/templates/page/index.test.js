import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import Page from './index';

describe('<Page />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Page title="Busca de Produtos">
        <h1>Busca</h1>
      </Page>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render page with document title right', () => {
    const title = 'Performes no Mercado Livre';
    const wrapper = shallow(
      <Page title={title}>
        <h1>Resultado da Busca</h1>
      </Page>
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('Head')).toHaveLength(1);
    expect(wrapper.find('title')).toHaveLength(1);
    expect(wrapper.find('title').text()).toEqual(title);
  });

  it('Should render page with semantic tag main', () => {
    const wrapper = shallow(
      <Page title="Página de produto">
        <h1>Página de de um produto</h1>
      </Page>
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('main')).toHaveLength(1);
  });
});
