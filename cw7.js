function stringToArray(string){
   return string.split(" ")
      }

   //   USD => CNY
   function usdcny(usd) {
      let r = (usd * 6.75).toFixed(2)
      return r +" Chinese Yuan"
    }
   //  Reversed sequence
   const reverseSeq = n => {
      let p=[]
      if (n>0){
      for (let i = 0; i < n  ;i++){
        p[i] = n-i
      }
      return p
        }
    };
    it("Sample Test", function() {
      assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
  });

  // Reversed Words
  function reverseWords(str){
    return str.trim().split(' ').reverse().join(' '); // reverse those words
  }
  // You only need one - Beginner
  function check(a, x) {
    for (let i = 0;i < a.length; i++){
      if (a[i] === x){
        return true
      }
    }
      return false
   }
  //  решение
  const check = (a,x) => a.includes(x);

  function check(a,x){
    return a.includes(x);
  };
// Is it even?

  const testEven=(n) =>n%2==0

  const greet =(n, o) => n ==o?'Hello boss':'Hello guest'
  
  function finalGrade (e, p) {
    if(e>90  || p>10){
      return 100
    } else if(  e > 75 &&  p >= 5){
      return 90
    }else if( e > 50 && p >=2){
      return 75
    }else {
      return 0
    }
    
// Even or Odd
const even_or_odd=(n)=> n%2==0?"Even":"Odd"

