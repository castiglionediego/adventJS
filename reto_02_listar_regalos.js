export default function listGifts(letter) {
    let giftList = letter
      .split([" "])
      .filter(letter => !letter.startsWith('_'));
    
    console.log(giftList);
    
    let resultObjet = {}
    let currectElement = ''
    let counter = 0
    
    
    giftList.map(gift => {
      currectElement = gift
      counter = 0
      if (!!currectElement){
        giftList.map(giftIterator => {
        if(currectElement === giftIterator){
          counter += 1
        }
         resultObjet[currectElement] = counter 
      })  
      }
      
    })
    
    return resultObjet 
    }
