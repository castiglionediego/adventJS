export default function isValid(letter) {
    const lastParens = {
       position: undefined,
       type: ''
     }
     
     for(let i = 0; i < letter.length; i++){
       
       if ('[]{}'.includes(letter[i])) return false;
       if ('()'.includes(letter[i])){
         if (lastParens.type === letter[i]) return false;
         if (lastParens.position === i -1) return false;
         
         lastParens.position = i;
         lastParens.type = letter[i]
         
       }
     }
     
     return lastParens.type === ')'
   }
