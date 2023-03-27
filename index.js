const express = require("express")
const cors = require("cors")
const path = require("path")

let mongoose = require("mongoose")
let config = require("./config.json")

let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId
let fs = require('fs')
let app = express()
const PORT = process.env.PORT || 2525

// app.use(express.static(path.join(__dirname+"/public")))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('tesla_angular'))
app.use(cors())


let Dealername = mongoose.model("Dealername", Schema({
    dealerId:Number,
    dealerName:String,
    dealerEmail:String,
    dealerPass:String,
    dealerCity:String,
    dealerAddress:String

}))
const string_mongo = `mongodb+srv://${config.username}:${config.password}@cluster0.t0n6iqu.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(string_mongo).then((res) => console.log("Connected"))
    .catch((err) => console.log("Error", err))

app.get("/getdealerdetails", (req, res) => {
    Dealername.find().then((db)=>res.send(db))

})


app.listen(PORT)