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

// Console wil run the following command
runProces("docker run hello-world");
