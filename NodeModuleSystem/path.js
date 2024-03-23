const path = require('path')

const ext = path.extname("C:MyProjectsNodeJsNodeModuleSystem\f1.txt");

const baseName = path.win32.basename(
  "C:\\MyProjects\\NodeJs\\NodeModuleSystem\\f1.txt"
);

console.log(ext)
console.log(baseName)