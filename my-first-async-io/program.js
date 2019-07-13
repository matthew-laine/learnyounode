const fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
    if(err) throw err;
    const file = data.toString()
    const countMe = file.split('\n')
    console.log(countMe.length - 1)
})