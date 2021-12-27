function getCoins(change) {
  
  const returnChange = new Array(6).fill(0);
  const coins = [1,2,5,10,20,50]
  
  let index = 5
  let accumulated = 0
  
  while (index >= 0){
    const coin = coins[index]
    
    if (change - coin - accumulated >= 0){
      ++returnChange[index]
      accumulated += coin
    }else {
      --index;  
    }
     
  }
  
  return returnChange
}


getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
