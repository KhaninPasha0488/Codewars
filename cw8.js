function positiveSum(arr) {
   let s = 0;
   for ( let i = 0; i < arr.length; i++){
     if( arr[i] > 0){
     s += arr[i];
       }
       
   }
 return s
 }
 function between(a, b) {
  let cr =[]
  if(a <b){
    for (let i=a;i<b+1; i++){
       cr.push(i)
  }
    return cr
    }
}

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