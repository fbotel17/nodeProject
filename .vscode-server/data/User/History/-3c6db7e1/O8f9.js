const express = require('express');
const app = express();
const port = 1234; // Le port sur lequel votre serveur écoutera


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

// Démarrer le serveur
const server = app.listen(port, () => {
  //console.log(os.networkInterfaces());
  console.log(`Serveur est en écoute sur      
                ${os.networkInterfaces()['ens18'][0].address}:${port}`);
});
