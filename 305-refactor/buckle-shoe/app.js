const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + 'public'));

// View engine
app.set('view engine', 'ejs');

// Function to convert number to rhyme
function buckleConverter(num) {
    if (num === 1 || num === 2) {
        return "Buckle my shoe";
    } else if (num === 3 || num === 4) {
        return "Knock at the door";
    } else if (num === 5 || num === 6) {
        return "Pick up sticks";
    } else if (num === 7 || num === 8) {
        return "Lay them straight";
    } else if (num === 9 || num === 10) {
        return "A big fat hen";
    } else {
        return "Please enter a number between 1 and 10";
    }
}

// Routes
app.get('/', (req, res) => {
    res.render('home', { message: null });
});

app.post('/', (req, res) => {
    let number = parseInt(req.body.number);
    let message = buckleConverter(number);
    res.render('home', { message: message });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});