const express = require('express')
const app = express()
const port = 3001

const USERS = [];

const QUESTIONS = [{
    title: "Two States",
    description: "Given an Integer array, return the maximum element in the array.",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];

const SUBMISSION = [

]


app.post('/signup', (req, res) => {

    const {email, password} = req.body;

    const userExists = USERS.some((user) => user.email === email);

    if(userExists) {
        return res.status(409).json({ messenge: 'User already exists' });
    }

    const newUser = {email, password};
    USERS.push(newUser);

    res.status(200).json({messege: 'Signup successful!' });
});

app.post('/login', (req, res) => {
    
    const {email, password} = req.body;

    const user = USERS.find((user) => user.email === email);

    if(!user || user.password !== password) {
        return res.status(401).json({messege: 'Invalid Credentials.' });
    }

    res.status(200).json({messege: 'Login Successful.'});

});


app.get('/questions', (req, res) => {
    res.status(200).json({ QUESTIONS });
});

app.get('submissions', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})