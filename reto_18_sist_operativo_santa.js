function fixFiles(files) {
 
 for (let i=0; i<files.length; i++){
   let acum=0
    for (let j = i + 1; j < files.length; j++){
     if (files[i] === files[j]){
       acum += 1
       files[j] = files[i] + `(${acum})`
     }
   }
 }
   return files
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
