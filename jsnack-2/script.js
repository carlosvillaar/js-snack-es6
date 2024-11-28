/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const teams = [
  {
    name: `milan`,
    cards: 0,
    faults: 0
  },
  {
    name: `inter`,
    cards: 0,
    faults: 0
  },
  {
    name: `juve`,
    cards: 0,
    faults: 0
  },
  {
    name: `roma`,
    cards: 0,
    faults: 0
  },
  {
    name: `napoli`,
    cards: 0,
    faults: 0
  },
]

for (let team of teams){
  team.cards = randomNumber(1,30)
  team.faults = randomNumber(1,30)
}

const newTeams = [];

for (let newTeam of teams){
  const nuovaSquadra = {
    name: newTeam.name,
    faults: newTeam.faults
  }

  newTeams.push(nuovaSquadra)

  console.log(newTeams);

}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
