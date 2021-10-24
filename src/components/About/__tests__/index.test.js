import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


// This will ensure we do not have any leftover memory data that could 
// give us false results.
afterEach(cleanup);

// describe function to declare the components we're testing.

describe ('About component', () => {
    // Renders About Test.

    // First Test
    // We check to see if the component is rendering.
    // using the word 'test' could be used instead of 'it'.
    it('renders', () => {
        render(<About/>);
    });

    // Second Test
    // Checking the snapshot of the DOM.
    it ('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
});



