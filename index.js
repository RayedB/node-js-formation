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
        baseURL: `https://swapi.co/api/people/`
    })
    .then((response) => {
        const dataCharacters = response.data.results;
        const result = dataCharacters.filter(dataCharacter => dataCharacter.name)
        // const filter = results.filter(result => results.id.name = "Yoda")
        console.log(result);
        for(let i = 0; i < 10; i++){
            let url = `https://swapi.co/api/people/?page=` + i;
            if (result == "Yoda") {
                console.log("success")
                
            } else {
                console.log("failure")
            }
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

// La requete que renvoie un tableau d'objet, les personnages se trouvent dans data: 
// 


