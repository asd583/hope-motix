const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/p2pdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    email: String,
    balance: Number
}));

// Routes
app.post('/register', async (req, res) => {
    const { username, email } = req.body;
    const newUser = new User({ username, email, balance: 0 });
    await newUser.save();
    res.json(newUser);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
