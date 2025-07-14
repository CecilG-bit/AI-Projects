// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Received webhook:', req.body);
    res.status(200).send('Webhook received');
});

app.get('/', (req, res) => res.send('Webhook is up!'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// JavaScript source code
