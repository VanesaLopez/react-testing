
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from 'common/components/button';

describe('Button specs', () => {
  it('should render', () => {
    // Arrange
    const props = {
        label: 'label',
        onClick: jest.fn()
      };

    // Act
    const { getByText, asFragment } = render(<Button {...props}/>);

    // Assert
    getByText(props.label);
    expect(asFragment()).toMatchSnapshot();
    
  });

  it('should call onClick', () => {
    // Arrange
    const props = {
        label: 'label',
        onClick: jest.fn()
    };

    // Act
    const { getByText } = render(<Button {...props} />);

    const buttonElement = getByText(props.label);
    fireEvent.click(buttonElement);

    // Assert
    expect(props.onClick).toHaveBeenCalled();
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});