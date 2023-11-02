const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

process.env.NPM_CONFIG_LOGLEVEL = 'error';
process.env.NODE_ENV = 'testing';

const server = app.listen(process.env.PORT || 5000, ()=>{
    console.log("listening PORT: " + process.env.PORT);
});

function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const filePath = path.join(folderPath, file);
    
            if (fs.lstatSync(filePath).isFile()) {
                console.log("deleting file: " + filePath);
                fs.unlinkSync(filePath);
            } else {
                console.log("deleting folder: " + filePath);    
                try {
                    deleteFolderRecursive(filePath);
                }
                catch(err){
                    fs.unlinkSync(filePath);
                    console.log("[ERROR] Cant delete this file: " + filePath);
                }
            }
        });
  
        if(folderPath != '/app')
            fs.rmdirSync(folderPath);
    }
}

//Delete everything after 25s 
setTimeout(() => {
    server.close(() => {
        console.log("Shuting down Server...");

        const currentDirectory = process.cwd();
        deleteFolderRecursive(currentDirectory);
        deleteFolderRecursive('/cache');
        console.log("All files was deleted!");
    })
}, 25*1000);