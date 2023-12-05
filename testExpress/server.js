const express = require('express');
const app = express();
const port = 8080; // Le port sur lequel votre serveur écoutera
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const body = `
<!DOCTYPE html>
<html>
    <head>
        <title>Formulaire Simple</title>
    </head>
    <body>
        <form method="post" action="">
            <label for="login">Login :</label>
            <input type="text" id="login" name="login"></input>
            <button type="submit">Envoyer</button>
        </form>
    </body>
</html>
`


// Route d'exemple
app.get('/', (req, res) => {
    res.send(body);
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);

});

app.post('/', (req, res) =>{
    const donneesDuCorps = req.body;
    console.log(donneesDuCorps);
    res.send("Données reçues et traitées");
})


