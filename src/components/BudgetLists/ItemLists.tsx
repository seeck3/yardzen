import React from 'react'
import { Item } from '../../types/types'
import { Card, CardContent, Checkbox, Typography } from '@mui/material'
import { PriceContext } from '../Contexts/PriceContext'
import { convertToUSD } from '../../utils/currency'
type Props = {
  items: Item[]
}
export const ItemLists = ({ items }: Props) => {
  const { addTotalPrice, subTotalPrice } = React.useContext(PriceContext)
  const [checked, setChecked] = React.useState<number>(-1);

  const handleToggle = (value: number, highPrice: number, lowPrice: number) => () => {
    if (value === checked) {
      setChecked(-1)
      subTotalPrice([highPrice, lowPrice])
    } else {
      setChecked(value);
      addTotalPrice([highPrice, lowPrice])
    }
  };
  return <React.Fragment>
    {items.map((item, i) => <Card sx={{ cursor: 'pointer' }} key={item.name + i} onClick={handleToggle(i, item.highPrice, item.lowPrice)}>
      <CardContent>
        <Checkbox
          edge="start"
          checked={checked === i}
          tabIndex={-1}
        />
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {item.name}
        </Typography>
        <div className='price'>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            High Price
          </Typography> 
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {convertToUSD(item.highPrice)}
          </Typography>
        </div>
        <div className='price'>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            Low Price
          </Typography> 
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {convertToUSD(item.lowPrice)}
          </Typography>
        </div>
      </CardContent>
    </Card>)}
  </React.Fragment>
}
