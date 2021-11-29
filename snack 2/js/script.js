const serieA =
[
    {
        nome: 'Atalanta',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Bologna',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Hellas Verona',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lazio',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Sampdoria',
        punti: 0,
        falliSubiti: 0,
    },{
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0,
    }

];
for(let i = 0; i < serieA.length; i++) {
    const thisteam = serieA[i];;

    const randomFalliSubiti = getRndInteger(0, 100);
    const randomPunti = getRndInteger(0, 100);

    thisteam.punti= randomPunti;
    thisteam.falliSubiti= randomFalliSubiti;
    console.log(thisteam);
}
console.log(serieA);
// FUNCTION
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}