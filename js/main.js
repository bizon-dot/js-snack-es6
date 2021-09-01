/*
        !TODO: 
           // 1. L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
           // 2. L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
           // 3. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
            // 4. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while
            // 5. Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
            // 6. Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
            7. Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
            // 8.Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.
           
            //    9.Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga
            // 10. Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

/*  
    ========================================================================================================
                                                        DEBUG
    ========================================================================================================
    
*/

//maxNum();
//maxWord();
//fiveAddition();
//fiveAdditionWhile();
//isOdd();
//isEven();
//countdown(8);
//countdownDOM(802);

// let word1 = prompt(`Inserisci la prima parola`);
// let word2 = prompt(`Inserisci la seconda parola`);

// (sameLengthWord(word1,word2)) ? console.log(`Le parole: ${word1} e ${word2} hanno la stessa lunghezza`) : console.log(`Le parole: ${word1} e ${word2} hanno una diversa lunghezza`);  

let numbers = randomNum(60);
createTempleate();
numbers.forEach( function(number) {
    (isEven(number)) ? document.getElementById("red").innerHTML += number + `<br>`: document.getElementById("green").innerHTML += number + `<br>`; 
})
console.log(numbers);





/*  
    ========================================================================================================
        1. L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
    ========================================================================================================
    
*/

function maxNum() {
    var firstNum = prompt((`Inserisci il primo numero`));
    var secondNum = prompt(`Inserisci il primo numero`);
    console.log(`Il numero maggiore è: ` + Math.max(parseInt(firstNum), parseInt(secondNum)));
}

/*  
    ========================================================================================================
        2. L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la 
            parola più corta, poi la parola più lunga.
    ========================================================================================================
    
*/

function maxWord() {
    var firstWord = prompt((`Inserisci la prima parola`));
    var secondWord = prompt(`Inserisci la seconda parola`);
    if (firstWord.length > secondWord.length) {
        console.log(`La parola più lunga è la prima: ` + firstWord);
    } else if (firstWord.length < secondWord.length) {
        console.log(`La parola più lunga è la seconda: ` + secondtWord);
    } else {
        console.log(`Le due parole hanno la stessa lunghezza`);
    }

}

/*  
    ========================================================================================================
        3. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa
         la somma di tutti i numeri inseriti.
    ========================================================================================================
    
*/

function fiveAddition(){
    var sum = 0;
    for (let index = 0; index < 5; index++) {
        var num = prompt((`Inserisci il numero da sommare`));
        console.log(`Numeri inseriti:` + index);
        sum = parseInt(num) + sum;
        
    }
    console.log(`La somma dei cinque numeri è: ` + sum);
}

/*  
    ========================================================================================================
        4. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa 
        la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con 
        il while
    ========================================================================================================
    
*/

function fiveAdditionWhile(){
    var index = 0;
    var sum = 0;
    do {
        index = index + 1;
        var num = prompt((`Inserisci il numero da sommare`));
        console.log(`Numeri inseriti:` + (index));
        sum = parseInt(num) + sum;
      } while (index < 5);
}

/*  
    ========================================================================================================
        5. Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari 
            inseriscilo nell’array
    ========================================================================================================
    
*/

function isOdd(){
    oddNumber = [];
    for (let index = 0; index < 6; index++) {
        var num = prompt((`Inserisci un numero, se disparo sarà inserito nell'array`));
        if (num % 2 != 0){
            oddNumber.push(num);
        }
    console.log(oddNumber);
    }
}

/*  
    ========================================================================================================
        6. Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
    ========================================================================================================
    
*/

function isEven(num){
    // var num = prompt((`Inserisci un numero, se è pari sarà stampato nella console`));
    // if (num % 2 == 0){
    //     console.log(`Il numero: ` + num + ` è pari`);
    // }
    return (num % 2 == 0) ? true : false;
    
}

/*  
    ========================================================================================================
        7. Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
    ========================================================================================================
    
*/

function fakeInvite(){
    user_name = ["Linus", "Richard", "John", "Tom"];
    user_lastName = ["Linus", "Richard", "John", "Tom"];
}

/*  
    ========================================================================================================
        7. Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal 
            numero passato.
    ========================================================================================================
    
*/

function countdown(num){
        while (num != 0) {
            num--;
            console.log(num);
        }
}

/*  
    ========================================================================================================
        8. Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal 
            numero passato e stampa il risultato nel DOM
    ========================================================================================================
    
*/

function countdownDOM(num){
    while (num != 0) {
        var div = document.createElement('div');
        div.innerHTML = num--;
        document.body.appendChild(div);
    }
}



/*  
    =================================================================================================================
        9. Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la 
            stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga
    =================================================================================================================
    
*/

function sameLengthWord(word1,word2){
    return (word1 == word2) ? true : false; 
   
}

/*  
    =================================================================================================================
        10. Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
            Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
    =================================================================================================================
    
*/

function createTempleate(){
    let box = `
       <div id="red" style="color:red"></div>
       <div id="green" style="color:green"></div>
       `;
        let templateBox = document.createElement('div');
        templateBox.innerHTML = box;
        document.getElementById('board').appendChild(templateBox);
}

function randomNum(length){
    let randomNum = [];
    while (randomNum.length < length) {
        let num = Math.floor(Math.random() * 999) + 1;
        if (!(randomNum.includes(num))) {
            randomNum.push(num);
        }
    }
    return randomNum;
}


// ==========================================================================================================


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

 
// Destructuring
// let modelBikeWithMinimumWeight = bikeWithMinimumWeight.model;
// let weightBikeWithMinimumWeight = bikeWithMinimumWeight.weight;

// Destructuring - Refactor
const {
    model,
    weight
} = bikes.minimumWeight(bikes);

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


/*
    =======================================================================================================
                                                        SNACK3 
    =======================================================================================================
    
*/


// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

//genero il range in maniera dinamica
const calculateRange = (min, max) => {
        let tmp = [];
        for (let i = min; i <= max; i++) {
            tmp.push(i);
        }
        return tmp;

}

let arr = ["0",1, "Giove", "Marte", 3369];
let range = calculateRange(0,1);

// filter - arrow function
// prendo l'index di ogni elemento e controllo che esista nel range  
let newArr = arr.filter((element,index)=>{
   
    return range.indexOf(index) > -1;
});

console.log(newArr);




