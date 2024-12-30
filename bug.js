const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is where the bug exists.
  res.send('Hello from Express!');
  // The problem is that if there is an error in this function, like 
  // trying to access a property that is undefined, it won't be caught.
  // It'll just crash the server and no error will be logged.
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});