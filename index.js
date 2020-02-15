const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>The server is running</h1>')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})