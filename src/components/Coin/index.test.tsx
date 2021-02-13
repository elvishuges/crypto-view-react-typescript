import React from 'react';
import { render, screen } from '@testing-library/react';
import { Coin } from './index';

it('Check coin label update', () => {
    render(<Coin coin="BTC" currentPrice={0} oldPrice={0} />)
    expect(screen.getByText('BTC')).toBeInTheDocument();
})