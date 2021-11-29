// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// const min = 1;
// const max = 4;
// myArray.forEach((element, index)=>{
//     if (index > min) {
//     } else if (index < max) {
//         console.log(element);
//     }
// })


const names = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = 1;
const max = 4;
const newArray = names.filter((element, index, array) =>{
    if (index > min) {
    } else if (index < max) {
        console.log(element);
    }
})