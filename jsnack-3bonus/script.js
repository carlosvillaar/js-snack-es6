const colors = [
  `rosso`,
  `giallo`,
  `verde`,
  `blu`,
  `arancione`,
  `viola`
];

function filterArray(array, min, max){
  const newArray =[];

  for (let i = 0; i < array.length; i++){
    if(i >= min && i <= max){
      newArray.push(array[i])
    }
  }
  
  return newArray
}
  
console.log(filterArray(colors, 1, 4));

