import React from 'react'
import { Typography } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../config/firebase.config'
import { typeMapper } from '../../constants/type-mapper'
import { Item, ItemMap } from '../../types/types'
import { ItemLists } from './ItemLists'

// using css
import './BudgetLists.css'

export const BudgetLists = () => {
    const [items, setItems] = React.useState<ItemMap>({})
    const collectionRef = collection(db, 'items')

    // fetching items from firebase db
    React.useEffect(() => {
        const getItems = async () => {
            const itemsMap: ItemMap = {}
            const data = await getDocs(collectionRef)
            const resultItems = data.docs.map(doc => doc.data()) as Item[]
            resultItems.forEach((item) => {
                if (!itemsMap[item.type]) {
                    itemsMap[item.type] = [item]
                } else {
                    itemsMap[item.type] = [...itemsMap[item.type], item]
                }
            })
            setItems(itemsMap)
        }
        getItems()
    }, [collectionRef])


    return (
        <div className='budget-lists-container'>{Object.entries(items).map(([key, items]) => <div key={key}>
            {/* human readable type name */}
            <Typography sx={{fontSize: 24}} gutterBottom>{typeMapper[key]}</Typography>
            <div className='lists-container'>
               <ItemLists items={items}/>
            </div>
        </div>)}</div>
    )
}
