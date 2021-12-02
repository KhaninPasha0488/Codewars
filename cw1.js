function multiply(number){
   if (number >= 0){
let a = number * (5 ** number.toString().length);
     return a
     }else{
       let a = number * (5 ** (number.toString().length -1));
     return a
       
     }
}
console.log(multiply(-10))

function multiply(number){
   var x = "'" + number + "'"
   if (number >= 0){
   var a = x.length - 2
   }else if (number < 0){
   var a = x.length - 3
   }
   var b =  Math.pow(5, a)
   return number * b
   }

   unction multiply(number){
      var str = String(Math.abs(number)).length;
      return number * 5 ** str;
      }

      function multiply(number){
         //your code here
         const numstr = String(Math.abs(number))
         const howlong = numstr.length
         return (number*(5**howlong))


         multiply = (number) => number * Math.pow(5,Math.abs(number).toString().length)

         