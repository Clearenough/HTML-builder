
const fs = require('fs')
const path = require('path')
const { createInterface } = require('readline')

const readLine = createInterface({input: process.stdin})
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'))

console.log('write something')

process.on('exit', () => console.log('bye bye'))

process.on('SIGINT', ()=>{
  process.exit()
})

readLine.on('line', (line) =>{
  if(line == 'exit') process.exit()
  writeStream.write(line)
})