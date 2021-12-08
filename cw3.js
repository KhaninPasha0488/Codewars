function boolToWord(bool){
   if(bool == true){
  let bool = "Yes";
   return bool}
     if(bool == false){
    bool = "No"
     
       return bool}
   
 }

 unction boolToWord( bool ){
   return bool ? 'Yes':'No';
 }
 var stringToNumber = function(str){
   // put your code here
   return Number(str)
 }
 // переворот строки
 function solution(str){
   return str.split("").reverse().join("");
 }
 function solution(s){
   var o = '';
   for (var i = s.length - 1; i >= 0; i--)
     o += s[i];
   return o;
   // Повтор строки
   function repeatStr (n, s) {
    return s.repeat(n);
  }
  repeatStr = (n, s) => s.repeat(n)