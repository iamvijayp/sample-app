const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'pass') {
    res.send('Login successful');
  } else {
    res.status(401).send('Login failed');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000/login'));
