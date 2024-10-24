const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/page', (req, res) => {
    res.sendFile(__dirname + '/page.html');
});

app.post('/confirm', (req, res) => {
    console.log(req);
    const data = req.body;
    
    // res.sendFile(__dirname + '/confirm.html');

    // res.send(data);
    res.render('confirm', { details: data });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
