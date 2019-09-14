import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextField } from '../../../common/components/text-field';

describe('TextField specs', () => {
  it('should render', () => {
    // Arrange
    const props = {
        name: 'textField',
        label: 'label',
        value: 'hola',
        onChange: jest.fn(),
        onBlur: jest.fn()
      };

    // Act
    const { getByText, asFragment } = render(<TextField {...props}/>);

    // Assert
    getByText(props.label);
    expect(asFragment()).toMatchSnapshot();
    
  });
});