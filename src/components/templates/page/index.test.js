import React from 'react';
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
});
