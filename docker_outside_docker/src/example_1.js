var http = require("http");
var exec = require('child_process').exec

//Method to execute command line commands from our code using child process technology
function runProces(command) {
    
    var child = exec(command);

    //Console will print the output data of the container
    child.stdout.on('data', function (data) {
        console.log(data);
    });

    //Console will print the output error of the container
    child.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    child.on('error', function (error) {
        console.log("error:" + error);
    });

    //Console will print when the execution is close
    child.on('close', function (code) {
        console.log("close:" + code);
    });
}

http.createServer(function (request, response) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
// Console wil run the following command
runProces("docker run hello-world");
