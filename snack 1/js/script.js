const bikeType =
[
    {
        nome:'Fizik',
        peso: 8,
    },
    {
        nome:'Miche',
        peso: 6,
    },
    {
        nome:'Shimano',
        peso: 10,
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
// Stampare a schermo
const{nome, peso} = theLightestBike;
const bikeHTML = `
<p>La bicicletta più leggera è ${nome} il cui peso è di ${peso} kg</p>
`;
document.getElementById('container').innerHTML = bikeHTML;