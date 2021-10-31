import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';


afterEach(cleanup);

describe('Contact component renders correctly', () => {
  // baseline test
  it('renders Contact component', () => {
    render(<Contact />);
  });

  // snapshot test
  it('contact matches snapshot', () => {
    const { asFragment } =  render(<Contact />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });

    it('testing data-id', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('contact-header')).toHaveTextContent('Contact me')
    })

    it('testing button', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
    })
})

