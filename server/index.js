const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const users = {
    1: {name: 'John', age: 30},
    2: {name: 'Jane', age: 25},
    3: {name: 'Bob', age: 40}
}

app.get('/student/:id', (req, res) => {
    const user = users[req.params.id];
    if(!user)
        return res.status(404).send('User not found')

    res.json(user);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
