const fs = require('fs')
const path = require('path')
const {readdir} = require('fs/promises')

const way = path.join(__dirname, 'secret-folder')


async function myReadDir(folderPath){
  try{
  const files = await readdir(folderPath,{withFileTypes: true})
  const filesArray = []

  for(const file of files){
    if(file.isFile()){
      filesArray.push(file)
    }
  }


  for(const file of filesArray){
    fs.stat(path.join(__dirname, 'secret-folder' , file.name), (err, stat) => {
      if(err) console.log(err)
      console.log(file['name'].split('.').join(' - ') + ' - ' + stat.size / 1000 + 'kb')
    })
  }
  console.log(filesSize)

  } 
  catch(err){
    console.log(err)
  }
}

myReadDir(way)