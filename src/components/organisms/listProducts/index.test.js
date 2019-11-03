import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import ListProducts from './index';

describe('<ListProducts />', () => {
  const productsMock = [
    {
      id: '1',
      title: 'Kit de Perfumes',
      price: {
        currency: 'R$',
        amount: 50,
      },
      picture: 'https://images.mercadolivre.com.br/imgone.png',
      free_shipping: false,
      address: {
        state_name: 'São Paulo',
      },
    },
    {
      id: '2',
      title: 'Tênis All Star',
      price: {
        currency: 'R$',
        amount: 60,
      },
      picture: 'https://images.mercadolivre.com.br/imgtwo.png',
      free_shipping: true,
      address: {
        state_name: 'Rio de Janeiro',
      },
    },
  ];

  it('Snapshot testing', () => {
    const { asFragment } = render(<ListProducts products={productsMock} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render ProductCard component', () => {
    const wrapper = shallow(<ListProducts products={productsMock} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('ProductCard')).toHaveLength(2);
  });
});
