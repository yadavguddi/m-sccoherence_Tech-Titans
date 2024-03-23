
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
let port = 8080;


app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname,"/public")));

main()
.then(() => {
    console.log("connected to DB")
})
.catch((err) =>{
console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/login')
}

app.listen(port,() => {
    console.log(`I am listening at port ${port}`)
 });

app.get("/",(req,res) => {
    res.send("Working")
});

app.get("/login" ,(req,res) => {
    res.render("login.ejs");
});