import express from 'express'

const app = express()

app.use(express.json())

const users = []

app.post('/users', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {

    res.status(200).json(users)
})

console.log("Server is running!")

app.listen(3001)



/*
user: adson 
password: 3JpxPZ1tXNVS7aKq
*/