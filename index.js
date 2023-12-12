// require express so it can be used
const express = require('express');

const app = express();

//specify port for it to run on
const PORT = 3000;

// input filler data for testing
const pets = [
  { id: 1, name: 'Mance', owner: 'Jireh' },
  { id: 2, name: 'Sharay', owner: 'iAm' },
  { id: 2, name: 'Tiffany', owner: 'Allah' },
  { id: 2, name: 'RuJay', owner: 'jehovah' },

];

// create dndpoint to get all pets
app.get('/pets', (req, res) => {
  res.json(pets);
});

// create ndpoint to get pets by name
app.get('/pets/:name', (req, res) => {
  const petName = req.params.name;
  const filteredPets = pets.filter((pet) => pet.name === petName);
  res.json(filteredPets);
});

// create endpoint to get pets by owner's name
app.get('/pets/owner/:ownerName', (req, res) => {
  const ownerName = req.params.ownerName;
  const filteredPets = pets.filter((pet) => pet.owner === ownerName);
  res.json(filteredPets);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
