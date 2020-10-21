const express = require('express');
const cors = require('cors');
const app = express();

//ajustes
app.set('port', 3000);
app.use(cors());
app.use(express.json());

//rutas
app.use('/mail', require('./rutas/mail'));

app.listen(app.get('port'), () => {
    console.log("Ihualia eMailServer Port: " + app.get('port'));
});
