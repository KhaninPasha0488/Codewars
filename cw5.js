// 1 Simple multiplication
const  simpleMultiplication=(n) =>n%2==0?n*8:n*9
   
// Area or Perimeter
const areaOrPerimeter = function(l , w) {
   return l==w?l*w:(l+w)*2
 };
// Grasshopper - Messi goals function
 function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return laLigaGoals + copaDelReyGoals+championsLeagueGoals
 }
// Is n divisible by x and y?
 const isDivisible =(n, x, y) => n % x === 0 && n % y === 0 ? true :false

// Function 3 - multiplying two numbers
 const multiply = (a,b) => a*b
//  Return Negative
const makeNegative =(n) =>n>0?n*(-1):n

// Grasshopper - Variable Assignment Debug
var a = "dev"
var b = "Lab"

var name =a + b

// Grasshopper - Basic Function Fixer
function addFive(num) {
   return  num + 5
  
 }
//  Grasshopper - Terminal game move function
function move (p, r) {
   return p +( r*2)
  }
  const lovefunc=(f, t)=> f%2==0 && t%2==0?false:true

  const lovefunc=(f, t)=> f%2==0 && t%2==0 ?false:f%2!==0 && t%2!==0 ?false :true

  function litres(time) {
    return Math.floor(time /2);
  }
  const square =(p) => p*p

  const greet =()=>"hello world!"
  

  function between(a, b) {
    let cr =[]
    if(a <b){
      for (let i=a;i<b+1; i++){
         cr.push(i)
    }
      return cr
      }
  }
  
  const hoopCount =(n)=> n<10?"Keep at it until you get it":"Great, now move on to tricks"

  function findDifference(a, b) {
    let i = a[0]*a[1]*a[2]
    let r =b[0]*b[1]*b[2]
    return (i>r)?i-r:r-i

  }function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
    var s =[]
    return s
    const zeroFuel = (d, m, f) => m*f>=d?true:false