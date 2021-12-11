function isDivideBy(number, a, b) {
   return number % a == 0 && number % b == 0 ? true : false
  }
  const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

  isDivideBy = (n, a, b) => !(n % a || n % b); 

  isDivideBy = (n, a, b) => (Number.isInteger(n / a) && Number.isInteger(n / b));

//   2
function howMuchILoveYou(nbPetals) {
  if(nbPetals % 6 === 1){
    return "I love you"
  }else if(nbPetals % 6 === 2){
    return "a little"
  }else if(nbPetals % 6 === 3){
    return "a lot"
    }else if(nbPetals % 6 ===4){
    return "passionately"
  }else if(nbPetals % 6 === 5){
    return "madly"
    }else if(nbPetals % 6 === 0){
    return "not at all"
    }
}
howMuchILoveYou = n => ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(n - 1) % 6]

function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
      case 1:
          return "a little";
      case 2:
          return "a lot";
      case 3:
          return "passionately";
      case 4:
          return "madly";
      case 5:
          return "not at all";
      default:
          return "I love you";
  }
}
// 3
function peopleWithAgeDrink(old) {
  if(old >= 0 && old < 14 ){
   return "drink toddy"
 }else if(old >= 14 && old < 18 ){
   return "drink coke"
 }else if(old >= 18 && old < 21 ){
   return "drink beer"
   }else if(old >= 21  ){
   return "drink whisky"
   }
};
onst peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

  ar peopleWithAgeDrink = function(old) {
    if (old>=21) return 'drink whisky';
    if (old>=18) return 'drink beer';
    if (old>=14) return 'drink coke';
    return 'drink toddy';
  };
  // 4
  const rentalCarCost =(d) =>
  d < 3 ? d * 40:
  d < 7 ? d * 40 - 20: 
  d * 40 - 50
  
  function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }

  const rentalCarCost = d => 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)

  // 5

  const getAge = (o) => Number(o[0])

  function getAge(inputString){
    return parseInt(inputString);
  }
  const getAge = parseInt;

  // 6

  const bmi =(w, h)=>w/(h**2) <= 18.5 ? "Underweight":
w/(h**2) <= 25 ?  "Normal":
 w/(h**2) <= 30 ?  "Overweight":"Obese"

// 7
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}
//  8
const remainder =(a, b)=> a > b ? a%b:b%a
