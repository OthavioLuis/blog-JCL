const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "jcl",
})

app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    console.log("Dados recebidos:", req.body);
    const { titulo, texto, imagem } = req.body;
    
    let SQL = "INSERT INTO tema (titulo, texto, imagem) VALUES (?, ?, ?)";

    db.query(SQL, [titulo, texto, imagem], (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * FROM tema";

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { titulo } = req.body;
    const { texto } = req.body;
    const { imagem } = req.body;

    let SQL = "UPDATE tema SET titulo = ?, texto = ?, imagem = ? WHERE  id = ? ";

    db.query(SQL, [titulo, texto, imagem, id], (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    let SQL = "DELETE FROM tema WHERE id = ?"
    db.query(SQL, [id], (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(3001, () => {
    console.log("Rodando Servidor")
})



// app.get("/", (req, res) => {
//     let SQL = 
//         "INSERT INTO tema (titulo, texto) VALUES ('Cultivando a fé autêntica em tempos desafiadores', 'teste')";

//     db.query(SQL, (err, result) => {
//         console.log(err);
//     });
// }); teste de bd para ver se está funcionando 