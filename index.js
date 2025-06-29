const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Krishna" },
  { id: 2, name: "Vibha" }
];

app.get('/', (req, res) => {
  res.send('Hello from Krishna\'s Node.js App!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


/*npm start
http://localhost:3000
http://localhost:3000/users
*/