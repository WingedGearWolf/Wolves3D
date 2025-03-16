const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Wolves 3D is running!');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
