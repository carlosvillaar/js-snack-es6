/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const raceBikes = [
  {
    name: 'bike1',
    weight: 20
  },

  {
    name: 'bike2',
    weight: 11
  },

  {
    name: 'bike3',
    weight: 18
  },

  {
    name: 'bike4',
    weight: 13
  },

  {
    name: 'bike5',
    weight: 19
  }
]

let lightBike = raceBikes[0];

for (let i = 0; i < raceBikes.length; i++){
  const bike = raceBikes[i];
  if (bike.weight < lightBike.weight){
    lightBike = bike
  }
}
console.log(lightBike);
