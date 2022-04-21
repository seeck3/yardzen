import { AppBar, Button, InputAdornment, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { convertToUSD } from '../../utils/currency'
import { PriceContext } from '../Contexts/PriceContext'
import LogoNew from '../../assets/LogoNew.png'
// using css
import './Header.css'
import {  db } from '../../config/firebase.config';
import { addDoc, collection } from 'firebase/firestore/lite';
export const Header = () => {
    const { totalPrice } = React.useContext(PriceContext)
    const [budget, setBudget] = React.useState('')
    const [snackBar, setSnackBar] = React.useState(false)

    // this will display if budger is low, high or within range in text
    const budgetValidation = () => {
        const numBudget = budget ? parseInt(budget) : 0
        return  numBudget < totalPrice[1] ? <Typography color={(theme) => theme.palette.warning.main}>Budget is under Low Total Price</Typography> : numBudget > totalPrice[0] ? 
            <Typography color={(theme) => theme.palette.error.main}>Budget is over High Total Price</Typography>: 
            <Typography color={(theme) => theme.palette.primary.main}>Budget is within range</Typography>
    }

    // submit the budget to firebase db in marcoDongChanSeoBudgetResponses collection
    const onSubmit = async () => {
        const collectionRef = collection(db, 'marcoDongChanSeoBudgetResponses')
        const data = await addDoc(collectionRef, {budget})
        if(data){
            setSnackBar(true)
            setBudget('')
            setTimeout(() => {
                setSnackBar(false)
            }, 3000);
        }
    }
    return (
        <AppBar color='transparent' position="static" sx={{ padding: '10px' }}>
            <Toolbar>
                <img className='logo' src={LogoNew} />
                <TextField
                    type={'number'}
                    sx={{ mr: 2, ml: 2 }}
                    id="outlined-adornment-amount"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                    label="User Budget"
                />
                <Typography sx={{ mr: 2 }}>
                    Budget : {convertToUSD(budget || 0)}
                </Typography>
                {budget && budgetValidation()}
                {budget && <Button sx={{ml: 2}} variant='contained' onClick={onSubmit}>submit</Button>}
                <div className='price-header'>
                    <Typography color={(theme) => theme.palette.error.main} sx={{ ml: 2 }} component='span' >
                        Total High Amount : {convertToUSD(totalPrice[0])}
                    </Typography>
                    <Typography color={(theme) => theme.palette.warning.main} sx={{ ml: 2 }} component='span'>
                        Total Low Amount : {convertToUSD(totalPrice[1])}
                    </Typography>
                </div>
            </Toolbar>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackBar}
                message="Budget has been stored in database"
            />
        </AppBar>
    )
}
