const fs = require('fs')

// // Reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log("data "+fileContent)

// // Writing a file 

// fs.writeFileSync('f1.txt',"Hello Word")

// fs.appendFileSync('f1.txt',"Hello World program")

// fs.unlinkSync('f1.txt') 


// // Directories 

// // Create a directory 

//fs.mkdirSync('myDirectory')

// Check the content inside of the directory 

// let folderPath = 'C:\\MyProjects\\NodeJs\\NodeModuleSystem\\myDirectory'
// let folderContent = fs.readdirSync(folderPath)

// console.log("Folder Content "+ folderContent)

// check whether directory exists or not 

let doesExist = fs.existsSync('myDirectory1')

console.log(doesExist)

// Remove Directory 

fs.rmdirSync('myDirectory')