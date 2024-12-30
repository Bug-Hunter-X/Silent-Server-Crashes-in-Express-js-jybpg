# Silent Server Crashes in Express.js

This repository demonstrates a common but subtle issue in Express.js applications: silent server crashes due to unhandled exceptions within request handlers.  The server fails without providing any helpful error messages, making debugging difficult.

## Problem
The provided `bug.js` file contains an Express.js server.  If an error occurs within the request handler (e.g., attempting to access an undefined property), the server will crash without logging any error information. This makes identifying the cause of the crash extremely challenging.

## Solution
The `bugSolution.js` file presents a solution using error handling middleware to catch unhandled exceptions and log them, providing more insight into the crash's cause.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`.
4. Observe that the server starts. Then navigate to `http://localhost:3000` in your browser. The server will likely crash without logging an error (or it will work if you fix the undefined property issue).

## How to Fix
Refer to `bugSolution.js` to see how to implement proper error handling middleware to prevent silent crashes and improve debugging.
