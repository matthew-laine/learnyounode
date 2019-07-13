const input = process.argv
const length = input.length
let result = 0;
if (length > 2) {
    for (let i=2; i < length; i++) {
       result +=(Number(input[i]))
    }
}
console.log(result)