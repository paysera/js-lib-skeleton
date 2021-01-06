import React from 'react';
import { render } from '@testing-library/react';

import Dummy from '../Dummy';

describe('Dummy', () => {
    it('should render', () => {
        const { container } = render(<Dummy />);
        expect(container).toBeDefined();
    });
});
