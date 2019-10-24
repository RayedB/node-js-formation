"use strict"


/*==========================================================================================
Exercice 1
Dans votre fichier index.js, créez une fonction qui appelle l'API de SWAPI et qui retourne Yoda
===========================================================================================*/

async function getYoda() {
  let noYoda = true;
  let i = 1;
  const yodaId = document.getElementById("yoda");

  while (noYoda) {
    await axios
      .get(`https://swapi.co/api/people/?page=${i}`)
      .then((response) => {
        const characters = response.data.results;
        const filteredCharacters = characters.filter(person => person.name === "Yoda");
        if (filteredCharacters.length > 0) {
          noYoda = false;
          console.log(filteredCharacters[0].name);
          const yoda = filteredCharacters[0].name
          yodaId.innerHTML = `Sage comme ${yoda} un jour, tu seras`
        }
        i++;
      })
  }

}
/*==========================================================================================
Exercice 2
Créez une fonction qui retourne le nom de chaque espèce qui contient au moins 2 personnages
===========================================================================================*/

// Il me faut toutes les espèces. Donc il va falloir boucler sur toutes les pages. Je déclare donc une variable compteur i = 1 à la racine de ma fonction
// Mon action se passera donc dans la boucle while
async function getSpecies() {
  // Je créé une variable species dont la valeur est true pour permettre de vérifier ma future condition
  let noSpecies = true;
  let i = 1;
  // Je récupère mon span pour afficher la réponse 
  const speciesId = document.getElementById("species");
  

  for(let i = 1; i < 5; i++){
  await axios
    .get(`https://swapi.co/api/species/?page=${i}`)
    .then((response) => {
      const species = response.data.results; //je stock mes résultats dans ma const (ça deviendra donc un tableau)
      const filteredSpecies = species.filter(specie => specie.people); // Je range mon filtre dans une nouvelle variable 
      
      if (filteredSpecies.length > 1) {
        noSpecies = false;
        const specie = filteredSpecies[0];
        speciesId.innerHTML += `<li>${specie.name}</li>` 
        
      }
    });
  }
}

/*==========================================================================================
Exercice 3
Créez une fonction qui retourne la somme des tailles (oui je sais, çà n'a aucun sens) de tous les humains
===========================================================================================*/


/*==========================================================================================
Exercice 4
Créez une fonction qui retourne un tableau de tous les tous les humains, contenant:
- le nom, 
- la taille, 
- le poids, 
- le nom des films dans lesquels ils sont apparus,
- le nom de leur planète d'origine
===========================================================================================*/

// ===================== RECREATION =========================\\

//////// Test d'une petit fonctionnalité /////////

async function getCharacter() {
  let noCharacter = true;
  let i = 1;
  const searchedCharacter = document.getElementById("characterName").value;
  const characterDesc = document.getElementById("characterDesc");


  try {
    while (noCharacter) {
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
    }

  } catch (error) {
    characterDesc.innerHTML = `Votre personnage ${searchedCharacter} n'existe pas.`;
  }

}

