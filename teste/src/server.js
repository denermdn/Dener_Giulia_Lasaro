import routes from "./routes/index.js";
import cors from "cors";
import express from 'express';
import pkg from 'pg';
import bodyParser from "body-parser";

const client = new pkg.Client({
    user: "tbpt_execute",
    password: "engsoft2021",
    host: "localhost",
    port: 5432,
    database: "tbpt"
});


const app = express();


app.use(express.json());
app.use(cors());
app.use(routes);



app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("mids do genim")
    next();
});
app.use(function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(req.body, null, 2))
  
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