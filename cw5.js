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

 //   // Remove First and Last Character Part Two

 function array(a){
  let b = a.split(',')
   let f =[]
   if (b.length >2){
 for (let i = 1; i< b.length-1 ; i++){
 
 f.push(b[i])
 }
   return f.join(" ")
 }else{
   return null
 }
 }

 //Sum The Strings
 function sumStr(a,b) {
  return String(Number(a) + Number(b))
}
//Remove First and Last Character
function removeChar(str){
  let b = str.split("")
   b.pop()
    b.shift()
   return b.join('')
  
  };
  
  function removeChar(str) { //Удалить певую и поледнюю(срока без первой и последней буквы)
    return str.slice(1, -1);
  }
  //Double Char
  function doubleChar(str) {
    let f = str.split("")
    let b = f.map( num => num.repeat(2))
    return b.join("")
   }
//    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
//    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
//    Test.assertEquals(doubleChar("1337"), "11333377");
//    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
//    Test.assertEquals(doubleChar("123456"), "112233445566");
//    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
//  });
Find the smallest integer in the array
class SmallestIntegerFinder {
  
  findSmallestInt(a) {
   let min =a[1]
    for (let i = 0;i < a.length;i++){
      
      if (a[i] <= min){
     min = a[i]
   }
     
    }
      return  min
      }
        
     }
     assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
     assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
     assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
     assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
     assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');

     class SmallestIntegerFinder {
      findSmallestInt(args) {
        return Math.min(...args)
      }
    }
    