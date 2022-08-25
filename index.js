const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jeongmin-0113:rolling09053@plate.pwmlbbd.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('MongoDB Connected!')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world!!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!!`))