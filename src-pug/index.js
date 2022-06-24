const express = require("express")
const app = express()
const PORT= 8080
const router = require('./routes/router')
const path = require('path')

app.set("views", path.join(__dirname,"./views"))
app.set("view engine","pug")

app.use('/static', express.static(__dirname + '/public'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',router)


app.listen(PORT,(err)=>{
    if(err){
        console.log(`server error: ${err}`)
    }
    console.log(`server listen port ${PORT}`)
})