const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2])
const file = buffer.toString()
const countMe = file.split('\n')
const numOfNewlines = countMe.length - 1

console.log(numOfNewlines)