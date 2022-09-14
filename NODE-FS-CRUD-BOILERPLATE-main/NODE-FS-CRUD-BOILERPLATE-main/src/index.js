const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent ,(err)=>{
		if(err){
			console.log(err.message);
		}
		else{
			console.log("data is saved")
		}
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let buffer=fs.readFile(fileName); //read
	let actual=(await buffer).toString();
	console.log(actual);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		if(err){
			console.log(err.message);
		}
		else{
			console.log("data is updated")
		}
	
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(err)=>{
		if(err){
			console.log(err.message);
		}
		else{
			console.log("file is deleted")
		}
	
	})
}
myFileWriter('file.txt','hello ');
// myFileReader('file.txt');
// myFileUpdater('file.txt',' wow');
//  myFileDeleter("file.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }