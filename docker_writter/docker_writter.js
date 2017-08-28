var fs = require('fs');

fs.writeFile("/home/out/hola1.txt", "[1]Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

fs.writeFile("/home/out/hola2.txt", "[2]Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

fs.writeFile("/home/out/hola3.txt", "[3]Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

fs.writeFile("/home/out/hola4.txt", "[4]Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 