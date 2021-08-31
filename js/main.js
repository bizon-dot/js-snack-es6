// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

const bikes = [{
        model: "slim",
        weight: 2
    },
    {
        model: "medium",
        weight: 25
    },
    {
        model: "fat",
        weight: 50
    }

];


let bikeWithMinimumWeight = bikes[0];
for (let index = 0; index < this.length; index++) {
    if (bikes[index].weight < lightBicycle.weight) {
        bikeWithMinimumWeight = bikes[index];
    }
}

// Destructuring
// let modelBikeWithMinimumWeight = bikeWithMinimumWeight.model;
// let weightBikeWithMinimumWeight = bikeWithMinimumWeight.weight;

const {model, weight} = bikeWithMinimumWeight;

//Template literal
console.log(`La bicicletta con il peso minore è la ${model} per un totale di ${weight}`);


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




// bikes.minimumWeight = function() {
//     let lightBicycle = this[0];
//     for (let index = 0; index < this.length; index++) {
//         if (this[index].weight < lightBicycle.weight) {
//             return lightBicycle = this[index];
//         }


//     }
// }

// let bikeWithMinimumWeight = bikes.minimumWeight();