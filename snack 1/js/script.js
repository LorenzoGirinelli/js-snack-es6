const bikeType =
[
    {
        nome:'graziella',
        peso: 45,
    },
    {
        nome:'corsa',
        peso: 20,
    },
    {
        nome:'mountain-bike',
        peso: 35,
    }
];
// Trovare la bicicletta con il peso minore
let theLightestBike = bikeType[0];

for( let i = 0; i < bikeType.length; i++) {
    const thisBike = bikeType[i];
    if(thisBike.peso < theLightestBike.peso) {
        theLightestBike = thisBike;
    }
}
console.log(theLightestBike);