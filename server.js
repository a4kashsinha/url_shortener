const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongoDB:localhost/urlShortener', {
    userNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/shortURLs', (req, res) +> {

})
app.listen(process.env.PORT || 5000)