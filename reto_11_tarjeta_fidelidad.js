
  const TICKET = 12
  const FIDELITY = 250
  const DISCOUNT = 0.75

  function applyDiscount(times){
    return times ? TICKET * Math.pow(DISCOUNT, times) + applyDiscount(times -1) : 0
  }



function shouldBuyFidelity(times) {
 
  const singleUsePrice = times * TICKET
  const fidelityPrice = FIDELITY + applyDiscount(times)

  return fidelityPrice < singleUsePrice
}

shouldBuyFidelity(1) 
