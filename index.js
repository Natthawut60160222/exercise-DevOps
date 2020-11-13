const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let items = [{id:1,name:'One Plus 8T'},{id:2,name:'Redmi Note 9S'}]

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/items', (req, res) => {
    return res.json(items)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app