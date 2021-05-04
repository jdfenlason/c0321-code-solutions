const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grades[nextId] = grade;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201);
  res.json(grade);
});

app.listen(3000, () => {
});
