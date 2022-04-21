// converting price to USD currency format
export const convertToUSD = (price: number | string): string => {
    const num = typeof price === 'string' ? parseInt(price) : price
    return num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}