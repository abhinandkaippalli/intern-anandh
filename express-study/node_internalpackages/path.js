const path = require ('path')


let filePath = 'D:\\Workspace\\Basic_works_js\\intern-anandh\\express-study\\node_internalpackages\\test.js'

let extName = path.extname(filePath)
console.log(extName)

let fileName = path.basename(filePath)
console.log(fileName)

