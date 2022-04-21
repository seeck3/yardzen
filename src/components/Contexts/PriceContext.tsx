import React from 'react'
    type DefaultState = {
        totalPrice: number[]
        addTotalPrice: (prices: number[]) => void
        subTotalPrice: (prices: number[]) => void
    }
    const defaultState: DefaultState = {
        totalPrice: [], 
        addTotalPrice: (prices: number[]) => {},
        subTotalPrice: (prices: number[]) => {}
    }

export const PriceContext = React.createContext<DefaultState>(defaultState);

