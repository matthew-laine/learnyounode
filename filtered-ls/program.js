const fs = require('fs')
const path = require('path')
const ext = '.' + process.argv[3]
var listOfExtItems = []

fs.readdir(process.argv[2], (err, list) => {
    if (err) throw err
    for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == ext)
        console.log(list[i])
    }
})