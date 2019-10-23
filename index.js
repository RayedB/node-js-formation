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

async function getYoda() {
  let noYoda = true;
  let i = 1;

  while (noYoda) {
    await axios
      .get(`https://swapi.co/api/people/?page=${i}`)
      .then((response) => {        
        const characters = response.data.results;
        const filteredCharacters = characters.filter(person => person.name === "Yoda");
        if (filteredCharacters.length > 0) {
          noYoda = false;
          console.log(filteredCharacters[0].name);
        }
          i++;
      })
  }

}

//////// Test d'une petit fonctionnalité /////////

async function getCharacter() {
  let noCharacter = true;
  let i = 1;
  const searchedCharacter = document.getElementById("characterName").value;
  const characterDesc = document.getElementById("characterDesc");

  while (noCharacter) {
    try {
      await axios
      .get(`https://swapi.co/api/people/?page=${i}`)
      .then((response) => {        
        const characters = response.data.results;
        const filteredCharacters = characters.filter(person => {
          // on utilise return quand l'instruction n'est pas sur une seule ligne 
          return person.name === searchedCharacter;
        });
        ///Si mon personnage a bien été trouvé : 
        if (filteredCharacters.length > 0) {
          noCharacter = false; // Dès qu'il trouve le perso, ça passe a false, donc on sort de la boucle
          const character = filteredCharacters[0];
          characterDesc.innerHTML = `${character.name} est né(e) en ${character.birth_year}`;
        } 
        
        i++;

      })
      .catch(() => {
        throw new Exception();
      })
      /* 
      Quand on fait un bloc try / Catch, pour indiquer qu'il y a eu une erreur quelque part, 
      on fait un throw new Exception() pour "raise" (soulever) une erreur que l'on peut "catcher" pour
      mettre l'erreur dans le catch d'après.
      */

    } catch (error) {
      characterDesc.innerHTML = `Votre personnage ${searchedCharacter} n'existe pas.`;
    }
    
  }

}



