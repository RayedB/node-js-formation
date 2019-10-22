"use strict"


// CONSIGNE
// Créer une fonction qui appelle l'API de Swapi 
// Elle retourne Yoda 


// // Je teste la récupération des personnages (avec fetch())
// function getPeople() {
//     return fetch("https://swapi.co/api/people/")
//     .then(res => res.json())
//     .then(people => console.log(people.results))
// }
// getPeople(); // OK

/////////// TEST //////////////
// AXIOS : récupération de l'objet People
const getPeople = () => {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}
getPeople();
/////////// TEST //////////////


// Essai avec autre syntaxe

const getYoda = () => { 
    axios({
        method: 'get', 
        url: 'https://swapi.co/api/people/'   
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error)
    })
}

// La requete que renvoie un tableau d'objet, les personnages se trouvent dans data: 
// Pour cela, je dois appeler data pour récupérer le name == "Yoda"


