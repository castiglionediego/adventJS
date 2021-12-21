  
function sumPairs(numbers, result) {
  
  let firstNumber = 0;
  let secondNumber = 0;

  for (let i = 0; i <= numbers.length-1; i++){
    
    firstNumber = numbers[i];
    
    for (let k = 1; k <= numbers.length-1; k++){
      secondNumber = numbers[k+i];
    
      if (firstNumber + secondNumber === result){
        return [firstNumber, secondNumber]
      }
      
    }
    
  }
  
  return null
}


sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
