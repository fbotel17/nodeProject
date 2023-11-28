// a) Intégrer le module express
const express = require('express');

// b) Créer une instance d'express
const app = express();
const os = require('os');

// c) Déterminer une variable pour le port
const port = 1234; // Vous pouvez choisir n'importe quel numéro de port que vous préférez

// d) Faire une route pour intercepter la racine du site en GET sur l'instance d'express
app.get('/', (req, res) => {
    // e) Coder la fonction fléchée de la route, elle doit juste afficher un message
    res.send('Bonjour, ceci est le server Express node.js de : <br><b>Mathias</b></br>');
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