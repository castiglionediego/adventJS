export default function contarOvejas(ovejas) {
    return ovejas
    .filter(oveja => oveja.color == 'rojo')
    .filter(oveja => oveja.name.toUpperCase().includes('N'))
    .filter(oveja => oveja.name.toUpperCase().includes('A'))
   }
