const {Client} = require('pg');
const client = new Client({
    user: "tbpt_execute",
    password: "engsoft2021",
    host: "localhost",
    port: 5432,
    database: "tbpt"
});

client.connect().then(() => console.log("Conectado parabens"))
.then(() => client.query("select * from user"))
.then(resultado => console.table(resultado.rows))
.catch(e => console.log(e))
.finally(() => client.end());
