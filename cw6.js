function perimeterSequence(a, n) {
  return a * ((n + n) * 2)
}

function areaLargestSquare(r) {
  return r ** 2 * 2
}

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

function arrayPlusArray(a1, a2) {
  let b = 0
  for (let i = 0; i < a1.length; i++) {
    b = b + a1[i]

  }
  let c = 0
  for (let i = 0; i < a2.length; i++) {

    c = c + a2[i]
  }
  return b + c
}

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
var arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b)