const express = require('express');
const dataJSON = require('./data');
const notes = dataJSON.notes;
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in notes) {
    const note = notes[id];
    notesArray.push(note);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  if (isNaN(noteId) || noteId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[noteId]) {
    res.status(404).json({ error: `cannot find note with id: ${req.params.id}` });
  } else {
    res.status(200).json(notes[noteId]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    const newNote = req.body;
    const newNoteId = dataJSON.nextId++;
    newNote.id = newNoteId;
    notes[newNoteId] = newNote;
    const updatedNotes = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', `${updatedNotes}`, 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  if (isNaN(noteId) || noteId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[noteId]) {
    res.status(404).json({ error: `cannot find note with id: ${req.params.id}` });
  } else {
    delete notes[noteId];
    const updatedNotes = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', `${updatedNotes}`, 'utf-8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(req.body);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  if (isNaN(noteId) || noteId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[noteId]) {
    res.status(404).json({ error: `cannot find note with id: ${noteId}` });
  } else {
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field ' });
    } else {
      const editNotes = req.body.content;
      notes[noteId].content = editNotes;
      const updatedNotes = JSON.stringify(dataJSON, null, 2);
      fs.writeFile('data.json', `${updatedNotes}`, 'utf-8', err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.status(200).json(notes[noteId]);
        }
      });
    }
  }
});

app.listen(3000, () => {

});
