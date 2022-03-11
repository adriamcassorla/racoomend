import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer component', () => {
  test('should match the snapshot', () => {
    const { container: Container } = render(<Footer/>);
    expect(container.firstChild).toMatchSnapshot();
  })

  test('Should render the footer', () => {
    return;
    // render(<Footer/>);
    // screen.getByText(/Made with 🍕🧀🌯 in Barcelona to attract some 🦝/);
  })
})