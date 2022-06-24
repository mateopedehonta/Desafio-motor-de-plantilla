const express = require("express")
const app = express()
const PORT= 8080
const router = require('./routes/router')
const path = require('path')
const {engine} = require('express-handlebars')

app.engine("hbs",engine({
    extname:".hbs",
    defaultLayout: path.join(__dirname,"./views/layouts/main.hbs"),
    layoutsDir:  path.join(__dirname,"./views/layouts"),
    partialsDir: path.join(__dirname,"./views/partials")
}))

app.set("view engine",'hbs')
app.set("views", path.join(__dirname,"./views"))

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