import React, { PropsWithChildren } from 'react'
import { PriceContext } from './PriceContext'

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

// Context Provider for total prices
export const PriceContextProvider = ({children}: PropsWithChildren<Props>) => {
    const [totalPrice, setTotalPrice] = React.useState<number[]>([0,0])
    const addTotalPrice = (prices: number[]) => {
      const totalHighPrice = totalPrice[0] + prices[0]
      const totalLowPrice = totalPrice[1] + prices[1]
      setTotalPrice([totalHighPrice, totalLowPrice])
    }
    const subTotalPrice = (prices: number[]) => {
      const totalHighPrice = totalPrice[0] - prices[0]
      const totalLowPrice = totalPrice[1] - prices[1]
      setTotalPrice([totalHighPrice, totalLowPrice])
    }
  return (
    <PriceContext.Provider value={{totalPrice, addTotalPrice, subTotalPrice}}>
      {children}
    </PriceContext.Provider>
  )
}
