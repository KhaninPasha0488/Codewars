function iceBrickVolume(radius, bottleLength, rimLength) {
   if (radius > 0) {
  var  a = 2 * (radius ** 2);
   }
   if (bottleLength > 0){
   var  b = bottleLength;
   }
   if (rimLength < bottleLength ){
     var c = b - rimLength;
   }
   return a * c;
 };
 const iceBrickVolume = (radius, bottleLength, rimLength) =>
  (bottleLength - rimLength) * 2 * radius ** 2;

  iceBrickVolume = (r, h, d) => 2*r*r*(h-d)

  function booleanToString(b){
    return String(b)
  }
  var a = "code";
var b = "wa.rs";
var name = a +""+ b;

var stringToNumber = function(str){
  // put your code here
  return Number(str)
};
function yearDays(year) {
  if (year % 4 !== 0) {
    return year + ' has 365 days';
  } else if (year % 100 !== 0) {
    return year + ' has 366 days';
  } else if (year % 400 !== 0) {
    return year + ' has 365 days';
  } else {
    return year + ' has 366 days';
  }
}