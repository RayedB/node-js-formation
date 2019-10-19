"use strict"

// CONSIGNE
// Créer une fonction qui appelle l'API de Swapi 
// Elle retourne Yoda 


// Je teste la récupération des personnages 
function getPeople() {
    return fetch("https://swapi.co/api/people/")
    .then(res => res.json())
    .then(people => console.log(people))
}
getPeople(); // OK


// On veut chercher Yoda 

function getYoda (array, data){
    
    fetch("https://swapi.co/api/people/" + i + "/")
    .then((data) => {
        return data.json()
    }).then((json) => {
        json.filter(json.name === "Yoda");
    })
}

// ça fonctionne, maintenant, on va 



