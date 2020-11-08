import React, { ReactElement } from 'react'
import { Coin } from "../Coin";
import { cryptoHttp } from '../../http';
import "./index.css";


interface HeaderProps {
    onSelected: (coin: string) => void
}

interface Price {
    [key: string]: { oldPrice: number, currentPrice: number }
}

const ALL_PRICES: Price = {
    BTC: { oldPrice: 0, currentPrice: 0 },
    LTC: { oldPrice: 0, currentPrice: 0 }
}

export const Header: React.FC<HeaderProps> = (props) => {
    const [prices, setPrices] = React.useState<Price>(ALL_PRICES)
    const { onSelected } = props
    React.useEffect(() => {
        const intervals = Object.keys(ALL_PRICES).map((coin) => {
            return setInterval(() => {
                cryptoHttp.get(`price?fsym=${coin}&tsyms=BRL`).then((response) => {
                    setPrices((preventState) => {
                        if (preventState[coin].currentPrice === response.data.BRL) {
                            return preventState
                        }
                        return {
                            ...preventState,
                            [coin]: {
                                oldPrice: preventState[coin].currentPrice,
                                currentPrice: response.data.BRL
                            }
                        }
                    })
                })
            }, 5000);
        });
        return () => {
            intervals.forEach(interval => clearInterval(interval))
        }
    }, [])

    return (
        <div className="Header">
            {Object.keys(prices).map((coin, index) => (
                <div onClick={() => onSelected(coin)} key={index}>
                    <Coin
                        coin={coin}
                        oldPrice={prices[coin].oldPrice}
                        currentPrice={prices[coin].currentPrice} />
                </div>
            ))}
        </div>
    )
}
