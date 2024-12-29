# Silent Crash: Unhandled Exception in Node.js Server

This repository demonstrates a subtle bug in a Node.js HTTP server where an unhandled exception within the request handler causes the server to crash silently, without providing helpful error messages in the console.

## Bug Description

The provided `bug.js` file contains a simple HTTP server.  However, it attempts to access a non-existent property of the `server` object (`server.nonExistentProperty`), which throws an exception.  This exception is not caught, leading to a silent server crash.

## Solution

The `bugSolution.js` file demonstrates the solution.  By using a `try...catch` block within the request handler, we can gracefully handle the exception and prevent the server from crashing.  The solution provides a more informative error message in the console.