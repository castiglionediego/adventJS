 function daysToXmas(date) {
 
   const xmaxDay = new Date('Dec 25, 2021')
   const msDay = 1000 * 3600 * 24
   const restOfDays = (xmaxDay - date) / msDay
   
  return Math.ceil(restOfDays)
}

const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) 

const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5
