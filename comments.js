// Create web server
// 1. Import express module
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// 2. Set up template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// 3. Set up static folder
app.use(express.static('public'));
app.use(express.static('files'));
app.use(bodyParser.urlencoded({ extended: false }));

// 4. Set up route
app.get('/', (req, res) => {
    res.render('index');
});

// 5. Set up route for POST request
app.post('/comment', (req, res) => {
    console.log(req.body);
    let comment = req.body.comment;
    let name = req.body.name;
    let email = req.body.email;
    let content = `Comment: ${comment}\nName: ${name}\nEmail: ${email}\n\n`;
    fs.appendFile('comments.txt', content, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
    res.render('index');
});

// 6. Set up route for GET request
app.get('/comment', (req, res) => {
    fs.readFile('comments.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

// 7. Start web server
app.listen(port, () => console.log(`Server is listening on port ${port}`));








