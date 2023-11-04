const pgp = require('pg-promise')();

require('dotenv').config();
const user = process.env.USER;
const pass = process.env.PASS;
const dbname = process.env.DATABASE;
const host = process.env.HOST;

const encodedPasword = encodeURIComponent(pass);
const conectionString = `postgresql://${user}:${encodedPasword}@${host}:5432/${dbname}`;

const db = pgp(conectionString);

db.connect()
    .then(() => {

        console.log("Conexion Exitosa");

    })
    .catch((err) => {

        console.log(`Error de Conexión ${err}`);

    })

module.exports = db;