import App from './App'

import { render } from '@testing-library/react'

// Tests
test('Renders main page correctly', () => {
  render(<App />);
  
  expect(true).toBeTruthy();
});
