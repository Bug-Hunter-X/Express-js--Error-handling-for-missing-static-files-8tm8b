# Express.js Error Handling for Missing Static Files

This repository demonstrates a common error in Express.js applications when serving static files: the scenario where the requested file doesn't exist.  The code included shows how to reproduce the error and the solution to handle it gracefully.

## Bug
The `bug.js` file shows an Express.js app attempting to serve `index.html`.  If `index.html` is not present in the same directory, the server will throw an error.

## Solution
The `bugSolution.js` file provides a solution by using `express.static` to serve static files from a designated directory and adding error handling middleware to catch and respond to 404 errors.