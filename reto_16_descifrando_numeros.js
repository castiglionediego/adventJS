
function decodeNumber(symbols) {

  const dictionary = {
    '.': 1,
    ',': 5,
    '..': 10,
    ';': 50,
    '!': 100,
  }
  
 const number = symbols.split('')
               .map(symbol => symbol in dictionary ? dictionary[symbol] : NaN)
               .map((value,index, arr) => value < arr[index + 1] ? -value : value)
               .reduce((prev,current) => prev + current)
  
  return number
}


decodeNumber(';.W') // NaN
decodeNumber('...') // 3
decodeNumber('.,') // 4 (5 - 1)
decodeNumber(',.') // 6 (5 + 1)
decodeNumber(',...') // 8 (5 + 3)
decodeNumber('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumber('.;') // 49 (50 - 1)
decodeNumber('..,') // 5 (-1 + 1 + 5)
decodeNumber('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumber('.;!') // 49 (-1 -50 + 100)
decodeNumber('!!!') // 300
decodeNumber(';!') // 50
