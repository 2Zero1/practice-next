import { render } from '@testing-library/react';

import IndexPage from '../../pages/index';

describe('IndexPage', () => {
  it('renders without crash', () => {
    const { container } = render(<IndexPage />);

    expect(container).toHaveTextContent('Hello, world!');
  });
});
