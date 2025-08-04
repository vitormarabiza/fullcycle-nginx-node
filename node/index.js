const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

// Cria tabela se não existir
connection.query(`CREATE TABLE IF NOT EXISTS people(id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))`);

app.get('/', (req, res) => {
    const name = `Vitor-${Math.floor(Math.random() * 1000)}`;
    connection.query(`INSERT INTO people(name) values(?)`, [name], (err) => {
        if (err) throw err;

        connection.query(`SELECT name FROM people`, (err, results) => {
            if (err) throw err;

            let response = '<h1>Full Cycle Rocks!</h1><ul>';
            results.forEach(row => {
                response += `<li>${row.name}</li>`;
            });
            response += '</ul>';
            res.send(response);
        });
    });
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});