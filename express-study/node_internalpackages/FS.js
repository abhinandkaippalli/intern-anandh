const fs = require('fs')
// how to read,write  delete and update a file

//let content = fs.readFileSync('1.txt')
//onsole.log( 'data of 1-> ' + content);

//writing into a file

//fs.writeFileSync('2.txt', 'Day for you')
//console.log('data written');

//we can also create a new file txt
//fs.writeFileSync('4.txt',('I am the new file'))
//console.log('data written');

// delete file
// appendfilesysnc used to append data

//fs.appendFileSync('4.txt', ' which you look for')
//console.log('append done');

//delete file

//fs.unlinkSync('3.txt')
//console.log('deleted');

//how fs module to do with directory
//create
//fs.mkdirSync('myDirectory')
//console.log('directory created');
//fs.mkdirSync('mdelete')
//console.log('directory created');
//remove doirectory
//fs.rmdirSync('mdelete')
//to check directory or file exist or not
//let doesExist = fs.existsSync('1.txt')
//console.log(doesExist);
//let doesExist = fs.existsSync('myDirectory')
//console.log(doesExist);

// readdirSync
let folderPath = 'D:\\Workspace\\Basic_works_js\\intern-anandh\\express-study\\node_internalpackages\\myDirectory'
let folderContents = fs.readdirSync(folderPath)
console.log(folderContents);





