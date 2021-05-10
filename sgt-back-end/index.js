const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  const [name, course, score] = [body.name, body.course, parseInt(body.score, 10)];
  if (!name || !course || !score) {
    res.status(400).json({ error: 'Entry MUST include the following: name, course, and score' });
    return;
  }
  if (score < 1 || score > 100) {
    res.status(400).json({ error: 'Score MUST be a number from 1 to 100' });
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
        values($1, $2, $3)
    returning *
  `;
  const values = [name, course, score];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.json.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const body = req.body;
  const [name, course, score] = [body.name, body.course, parseInt(body.score, 10)];
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: `${gradeId} is not a positive integer`
    });
    return;
  }
  if (!Number.isInteger(gradeId) || score < 1 || score > 100) {
    res.status(400).json({
      error: 'Score MUST be a number from 1 to 100'
    });
    return;
  }
  if (!Number.isInteger(gradeId) || !name || !course || !name) {
    res.status(400).json({
      error: 'Entry Must include the following: name, course, and score'
    });
    return;
  }
  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *`;
  const values = [name, course, score, gradeId];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with 'gradeId' ${gradeId}!` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({ error: `${gradeId} is not a positive integer` });
    return;
  }
  const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *`;
  const value = [gradeId];
  db.query(sql, value)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with 'gradeId' ${gradeId}!` });
      } else {
        res.status(204).send();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(({ error: 'An unexpected error occurred' }));
    });
});

app.listen(3000, () => {

});
