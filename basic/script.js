//*****************************************  FILE SYSTEM     ********************************************* //
const fs = require('fs')
// ************************************
// Making a folder 
const MakeDirectory =() =>{
    fs.mkdir("./hello" , function(err){
        if(err) console.error(err);
        else console.warn("Directory created successfully!");
    })
}
// MakeDirectory();
// ************************************
// Deleting the folder
const RemoveDirectory = ()=>{
    fs.rm("./hello" ,{recursive:true}, function(err){
        if(err) console.error(err);
        else console.warn("Directory created successfully!");
    })
}
// RemoveDirectory();
// ************************************

// Creating a file with file type extention
const CreatFile =() =>{
    fs.writeFile("./hello/test.txt" , "ARE  U HERE TO   READ THIS ?", function(err){
        if(err) console.error(err);
        else console.warn("File created successfully!");
    })
}
// CreatFile();

// ************************************
//  Deleting the file
const UnlinkExtension = () =>{
    fs.unlink("./hello/test.txt", function(err){
        if(err) console.error(err);
        else console.warn("File deleted successfully!");
    })
}
// UnlinkExtension();

// *************************************
 // Reading  file
 const ReadFile = ()=>{
    fs.readFile("./hello/test.txt", 'utf8', function(err, data) {
        if (err) console.error(err.message); ;
        console.warn(data);
    });
}
// ReadFile();
// *************************************
// Read Directory
const ReadDirectory = () =>{ 
    fs.readdir('./hello',{withFileTypes:true} ,function(err, data){
        if(err) console.error(err.message);
        // else console.warn(data[0].name);
//      else console.warn(data[0].isDirectory());         //is directory gives true its a directory  & false if its a file
else {data[0].isDirectory() ?  console.warn( `${data[0].name}  -  DIRECTORY`) : console.warn(` ${data[0].name}  -  FILE`)}  
// for multiple files in a directory
//      else {
//         data.forEach(function(data) {
//           {data.isDirectory() ?  console.warn( `${data.name}  -  DIRECTORY`) : console.warn(` ${data[0].name}  -  FILE`)} 
//         })
//    }
    })
// Output:  // it will print all the files in the directory  with their file type  as 1 (file) or 2 (directory)  as symbol type 1  in Dirent object  (just like if we are storing the string data in string data type)  in our case it is 1 for files and 2 for directories.

    // [
//   Dirent {  // dirent  is a data structure that store the file ....... just like if we store the string data in string .
//     name: 'test.txt',
//     parentPath: './hello',
//     path: './hello',
//     [Symbol(type)]: 1      1 means files   2 means Directory
//   }
// ]
}
// ReadDirectory();

// ************************************* SERVER *******************************
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Hello, world!");
// })
// server.listen(3000)


