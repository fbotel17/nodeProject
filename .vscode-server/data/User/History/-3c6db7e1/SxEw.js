const express = require('express');
const app = express();
const port = 1234; // Le port sur lequel votre serveur écoutera
const bodyParser = require('body-parser');

//middleware 
app.use(bodyParser.json()); // décode le body d'une requête



// Route d'exemple
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est un serveur web simple en utilisant Node.js et Express.js');
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);

});

// Gestionnaire d'erreurs global
process.on('uncaughtException', (err) => {
  console.error(`Une erreur non capturée s'est produite : ${err.message}`);
  process.exit(1); // 1 signifie une sortie avec une erreur
});

app.post('/', (req, res) => {
  const donneesDuCorps = req.body;
  console.log(donneesDuCorps);
  res.send('Données reçues et traitées !');
});
