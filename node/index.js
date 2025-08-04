const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

connection.query(\`
  CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
  )
\`);

app.get('/', (req, res) => {
    const name = 'Vitor';
    connection.query(\`INSERT INTO people(name) VALUES(?)\`, [name]);

    connection.query(\`SELECT name FROM people\`, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao consultar banco de dados.');
        }

        const names = results.map(row => \`<li>\${row.name}</li>\`).join('');
        res.send(\`<h1>Full Cycle Rocks!</h1><ul>\${names}</ul>\`);
    });
});

app.listen(port, () => {
    console.log(\`Rodando na porta \${port}\`);
});
