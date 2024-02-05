// a) Intégrer le module express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


const db = mysql.createConnection({
  host: '192.168.64.213',
  user: 'root',
  password: 'root',
  database: 'Faustin',
});

// b) Créer une instance d'express
const app = express();
app.use(cors());

const os = require('os');

app.use(bodyParser.json()); // décode le body d'une requête


// c) Déterminer une variable pour le port
const port = 4567; // Vous pouvez choisir n'importe quel numéro de port que vous préférez

// d) Faire une route pour intercepter la racine du site en GET sur l'instance d'express
app.get('/', (req, res) => {
    // e) Coder la fonction fléchée de la route, elle doit juste afficher un message
    res.json({
      message: 'Bonjour, ceci est le serveur Express Node.js de :',
      author: 'Faustin'
    });
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM User', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs:', err);
      res.status(500).send('Erreur serveur');
    } else {
      res.json(results);
    }
  });
});

app.post('/users', (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).send('Les champs login et password sont requis');
  }

  const query = 'INSERT INTO User (login, password) VALUES (?, ?)';
  db.query(query, [login, password], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
      res.status(500).send('Erreur serveur');
    } else {
      res.status(201).json({ id: result.insertId, login, password });
    }
  });
});

// Route pour la mise à jour d'un utilisateur
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).send('Les champs login et password sont requis');
  }

  const query = 'UPDATE User SET login = ?, password = ? WHERE id = ?';
  db.query(query, [login, password, userId], (err) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', err);
      res.status(500).send('Erreur serveur');
    } else {
      // Renvoie une réponse JSON appropriée après la mise à jour
      res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
    }
  });
});

// Ajoutez cette route pour la suppression d'un utilisateur
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  const query = 'DELETE FROM User WHERE id = ?';
  db.query(query, [userId], (err) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', err);
      res.status(500).send('Erreur serveur');
    } else {
      // Renvoie une réponse JSON appropriée après la suppression
      res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
console.log(req.body);
  // Requête pour vérifier si l'utilisateur existe et a le bon mot de passe
  const query = 'SELECT * FROM User WHERE login = ? AND password = ?';

  db.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Erreur lors de la vérification de la connexion:', error);
      res.status(500).json({ error: 'Erreur lors de la vérification de la connexion' });
    } else {
      if (results.length > 0) {
        // Utilisateur trouvé, connexion réussie
        res.status(200).json({ message: 'Connexion réussie' });
      } else {
        // Aucun utilisateur trouvé, identifiants invalides
        res.status(401).json({ error: 'Identifiants invalides' });
      }
    }
  });
});

app.post('/logout', (req, res) => {
  // Ajoutez ici la logique pour déconnecter l'utilisateur
  // Vous pouvez supprimer la session, invalider le token, etc.
  res.status(200).json({ message: 'Déconnexion réussie' });
});



  // Démarrer le serveur
const server = app.listen(port, () => {
    //console.log(os.networkInterfaces());
    console.log(`Serveur est en écoute sur      
                  ${os.networkInterfaces()['ens18'][0].address}:${port}`);
});

app.post('/', (req, res) => {
    const donneesDuCorps = req.body;
    console.log(donneesDuCorps);
    res.send('Données reçues et traitées !');
  });
  