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
 }
 const iceBrickVolume = (radius, bottleLength, rimLength) =>
  (bottleLength - rimLength) * 2 * radius ** 2;

  iceBrickVolume = (r, h, d) => 2*r*r*(h-d)