const {Client} = require('pg');
const express = require('express');
const app = express();

app.use(express.json());


// ------------------- Configurações de segurança (sem elas dá meio ruim) -----------------
const helmet = require('helmet')

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["'unsafe-inline'"],
      "connect-src": ["'self'", "'unsafe-inline'"],
      "img-src": ["'unsafe-inline'", "data:"],
      "style-src-elem": ["'self'", "data:"],
      "script-src": ["'unsafe-inline'", "'self'"],
      "object-src": ["'unsafe-inline'"],
    },
  })
);

// --------------- Configuração da conexão com  obanco --------------
const client = new Client({
    user: "tbpt_execute",
    password: "engsoft2021",
    host: "localhost",
    port: 5432,
    database: "tbpt"
});



// ----------- Comunicação com a aplicação -------------------
app.get("/", (req, res) => res.sendFile(`${__dirname}/cadastro.html`))

app.get("/users", async (req, res) => {
    const rows = await readUsers();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})


app.post("/users", async (req, res) => {
    let result = {}
    try{
        const reqJson = req.body;
        result.success = await createUser(reqJson.user)
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})





app.delete("/users", async (req, res) => {
    let result = {}
    try{

        const reqJson = req.body;
        result.success = await deleteUser(reqJson.id)
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})


app.listen(8080, () => console.log("Conectado na porta 8080"))

start()

async function start() {
    await connect();
}

async function connect() {
    try {
        await client.connect(); 
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});


//---------------------- Funções de leitura/escrita -----------------------
async function readUsers () {
    try {
        const results = await client.query("select * from tb_user");
        console.log("teto");
        return results.rows;
    }
    catch (e) {
        console.log("Erro na conexao: " + e);
    }
}


async function createUsers(userText) {
    try {
        console.log(userText);
        await client.query("INSERT INTO TB_USER VALUES ($1);", [userText]);
    
        return true;
    }
    catch(e){
        console.log(e)
        return false;
    }
}

async function deleteUsers (id){
    try {
        await client.query("DELETE FROM TB_USER WHERE USER_ID = $1", [id]);
        return true;
    }
    catch(e){
        return false;
    }
}

module.exports = app;