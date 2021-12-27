
function maxProfit(prices) {
  
  let profit = -1;
  
  prices.map( (price, index, array) => {
    let max = Math.max.apply(Math, Array.from(array).splice(index + 1))
    profit = (max - price > profit) && max - price > 0 ? max - price : profit
  } )
  
  return profit
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
