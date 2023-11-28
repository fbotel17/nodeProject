const express = require('express');
const app = express();
const port = 1234; // Le port sur lequel votre serveur écoutera


// Route d'exemple
app.get('/', (req, res) => {
  res.send('Bonjour pipi, ceci est un serveur web simple en utilisant Node.js et Express.js');
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);

});