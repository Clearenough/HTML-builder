const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'text.txt')
const readableStream = fs.createReadStream(filePath)
readableStream.on('data', chunk=>{
  console.log(chunk.toString())
})
