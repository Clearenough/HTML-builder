
const fs = require('fs')
const path = require('path')
const {readdir, mkdir, rm, copyFile} = require('fs/promises')

const sourse = path.join(__dirname, 'files')
const destination = path.join(__dirname, 'files-copy')



async function filesCopy(){
  await rm(destination, {recursive: true, force: true})
  await mkdir(destination, {recursive: true})
  const files = await readdir(sourse, {withFileTypes: true})
  
  for(const file of files){
    if(file.isFile()){
      await copyFile(path.join(sourse, file.name), path.join(destination, file.name))
    }
  }
}

filesCopy()



