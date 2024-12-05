// promisified read file

const fs = require('fs');

function readFilePromisified(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err); // Reject the promise on error
            } else {
                resolve(data); // Resolve the promise with the file data
            }
        });
    });
}

// using
readFilePromisified('01.txt')
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err));