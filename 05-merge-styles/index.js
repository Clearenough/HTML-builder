const fs = require('fs')
const path = require('path')
const {rm, readdir} = require('fs/promises')

const source = path.join(__dirname, 'styles')
const destination = path.join(__dirname, 'project-dist', 'bundle.css') 

const writeStream = fs.createWriteStream(destination)

async function bundleCreation(){
  const files = await readdir(source, {withFileTypes: true})
  for(const file of files){
    if(file.isFile && file.name.includes('css')){
    const readStream = fs.createReadStream(path.join(source, file.name))
    readStream.on('data', (chunk)=>{
      writeStream.write(chunk)
    })
    }
  }
}

bundleCreation()