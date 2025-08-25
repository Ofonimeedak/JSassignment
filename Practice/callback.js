const fs=require('fs')

// fs.readFile( "textfile.txt", "utf8", (err,data)=>{
//     if(err){
//         console.error('error reading file',err);
//         return;
//     }

//     console.log(`file reading succesfful:`, data)
// })
fs.readFile('textFile.txt','utf8',(err,data)=>{
    if(err){
        console.error(`Error reading file`,err);
        return;
    };
    const modifiedFile=data.toUpperCase()
    fs.writeFile("output.txt",modifiedFile,(err,data)=>{
        if(err){
            console.error(`Error writing file:`,err);
            return;
        };
        fs.readFile('output.txt','utf8',(err, data)=>{
            if(err){
                console.error(`error reading modified file:`,err);
                return;
            }
            console.log(`modified content successfully read:`, data)
        })
    })
})