const app = require('./bin/express')();
const router = require('./bin/express-router')();
const PORT = 3000;

require('./src/routers/default')(router);
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Serveur à l'écoute sur le port ${PORT}.`);
});

