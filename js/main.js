// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera


/*  
    =======================================================================================================
                                            SNACK 1 --- BONUS ---
    =======================================================================================================
    
*/

//Instanzio l'oggetto

const bikes = [{
        model: "slim",
        weight: 2
    },
    {
        model: "medium",
        weight: 5
    },
    {
        model: "fat",
        weight: 50
    }

];


/*
    =======================================================================================================
                                  Aggiungo una arrow function per trovare la bici 
                                       con peso minore come metodo all'oggetto 
    =======================================================================================================
    
*/

bikes.minimumWeight = (bikes) => {

    let bikeWithMinimumWeight = bikes[0];
    for (let index = 0; index < bikes.length; index++) {
        if (bikes[index].weight < bikeWithMinimumWeight.weight) {
            bikeWithMinimumWeight = bikes[index];
        }
    }
    return bikeWithMinimumWeight;
}

let bikeWithMinimumWeight = bikes.minimumWeight(bikes);

// Destructuring
// let modelBikeWithMinimumWeight = bikeWithMinimumWeight.model;
// let weightBikeWithMinimumWeight = bikeWithMinimumWeight.weight;

// Destructuring - Refactor
const {
    model,
    weight
} = bikeWithMinimumWeight;

//Template literal
console.log(`La bicicletta con il peso minore è la ${model} per un totale di ${weight}`);

/*
    =======================================================================================================
                                                    SNACK2
    =======================================================================================================
    
*/

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Genero l'oggetto teams in maniera dinamica partendo da un array di nomi grazie all'utilizzo di forEach
const nameTeams = ["Tokyo", "Berlino", "Mosca", "Toronto", "Roma", "Cracovia"];
const teams = [];
nameTeams.forEach((teamName) => {
    let team = {
        teamName: teamName,
        points: Math.floor(Math.random() * 11),
        fouls: Math.floor(Math.random() * 40)
    };
    teams.push(team);
});

console.log(teams);


// Estrapolo l'array contenente teamName e fouls
let teamsFouls = [];
for (const key in teams) {
    if (teams.hasOwnProperty.call(teams, key)) {
        const team = teams[key];
        const {
            teamName,
            fouls
        } = team;
        let teamFouls = [teamName, fouls];
        teamsFouls.push(teamFouls);
    }
}

console.log(teamsFouls);


/*
    =======================================================================================================
                                                 SNACK1 SENZA BONUS 
    =======================================================================================================
    
*/



// let bikeWithMinimumWeight = bikes.minimumWeight();

// let bikeWithMinimumWeight = bikes[0];
// for (let index = 0; index < this.length; index++) {
//     if (bikes[index].weight < lightBicycle.weight) {
//         bikeWithMinimumWeight = bikes[index];
//     }
// }

// // Destructuring
// // let modelBikeWithMinimumWeight = bikeWithMinimumWeight.model;
// // let weightBikeWithMinimumWeight = bikeWithMinimumWeight.weight;

// // Destructuring - Refactor
// const {model, weight} = bikeWithMinimumWeight;

// //Template literal
// console.log(`La bicicletta con il peso minore è la ${model} per un totale di ${weight}`);