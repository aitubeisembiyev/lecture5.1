const express = require('express')
const bodyparser=require('body-parser')
const port = 3000

const app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/bmicalc',((req, res) => {
    res.sendFile(__dirname+'/bmicalc.html')
}))

app.post('/bmicalc',((req, res) => {
    res.sendFile(__dirname+'/bmicalc.html')
}))


app.listen(port, function (){
    console.log(`app launched at http://localhost:${port}`)
})