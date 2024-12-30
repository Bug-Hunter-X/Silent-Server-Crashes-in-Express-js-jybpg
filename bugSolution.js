const express = require('express');
const app = express();
const port = 3000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  // Simulate error: Trying to access a non-existent property
  // Comment this line out to test a successful response
  // const undefinedProperty = something.that.does.not.exist;

  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});