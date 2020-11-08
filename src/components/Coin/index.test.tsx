import React from 'react'
import { render, screen } from '@testing-library/react'
import { Coin } from './index'

it("Check coin Label", () => {
    render(<Coin coin="BTC" oldPrice={0} currentPrice={0} />)
    expect(screen.getByText("BTC"))
})