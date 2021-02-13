import React from 'react'
import "./index.css";

interface CoinProps {
    coin: string;
    oldPrice: number;
    currentPrice: number
}

export const Coin: React.FC<CoinProps> = (props) => {
    const { coin, oldPrice, currentPrice } = props;
    const classes = ["Coin"]
    if (oldPrice < currentPrice) {
        classes.push('up')
    }
    if (currentPrice < oldPrice) {
        classes.push('down')
    }
    return (
        <div className={classes.join(' ')}>
            <span>{coin}</span>
            <span>Reais ${currentPrice.toLocaleString()}</span>
        </div>
    )
}
