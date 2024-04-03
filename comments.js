// Create Web Server
// 1. Load libraries
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// 2. Create an instance of express
const app = express();

// 3. Configure the express instance
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 4. Connect to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'comment_system'
});

connection.connect();

// 5. Create a route
app.get('/comments', (req, res) => {
    // 6. Query the database
    connection.query('SELECT * FROM comments', (error, results) => {
        // 7. Send the results back as JSON
        res.json(results);
    });
});

app.post('/comments', (req, res) => {
    // 8. Get the data from the request
    const comment = req.body.comment;

    // 9. Insert the data into the database
    connection.query('INSERT INTO comments (comment) VALUES (?)', [comment], (error, results) => {
        // 10. Send a response back to the client
        res.json({
            id: results.insertId,
            comment: comment
        });
    });
});

// 11. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});