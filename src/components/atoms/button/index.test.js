import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  const onClick = jest.fn();
  const buttonText = 'Comprar';

  it('Snapshot testing', () => {
    const { asFragment } = render(
      <Button onClick={onClick}>
        {buttonText}
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should call onClick function if click in button', () => {
    const { getByTitle } = render(
      <Button onClick={onClick}>
        {buttonText}
      </Button>
    );

    const button = getByTitle(buttonText);
    fireEvent.click(button);

    expect(onClick).toBeCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
