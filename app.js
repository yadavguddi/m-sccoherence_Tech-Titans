
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Listing = require("./models/listing.js");
const login = require("./models/login.js");
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
    await mongoose.connect('mongodb://127.0.0.1:27017/signup')
}

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/logindata')
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


app.post("/login",(req,res) => {
    let{name,email,password} = req.body;
    let user1 = new Listing({
        name:name,
        email:email,
        password:password,
    });
    user1.save().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
//   res.redirect("/dashboard");
});

app.post("/login",async(req,res) => {
    let{email,password} = req.body;
    let user2 = new login({
        email:email,
        password:password,
    });
    user2.save();
    res.redirect("/dashboard");
    try{
        const check=await collection.findOne({ email:req.body.email})
         
        if(check.password===req.body.password){
            res.render("/dashboard")
        }
      else{
        res.send(" Wrong password")
      }
      
    }
    catch{
        res.send("Wrong details")
    }
 
});


// let user1 = new login ({
//     email:"guddi98922@gmail.com",
//     password:"abcd12243"
// });
// user1.save().then((res) =>{
//     console.log(res);
// })


//index route
// app.get("/show" , async (req,res) =>{
//     let data =  await Listing.find();
//     console.log(data);
//     res.send("working");
// })

app.get("/dashboard", (req,res) => {
    res.render("dashboard.ejs");
});

