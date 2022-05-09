//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

str = 'Hello Pug'

let doubleChar = str => str.split('').map(el => el +el)
.join('')

console.log(doubleChar(str))