const Express = require("express");
const app = Express();
const Cors = require('cors');
require("dotenv").config();
const Mongoose = require("mongoose")


// Route Handlers Import Section
const AddBus = require("./Controllers/AddBus")
const SearchBus = require("./Controllers/SearchBus")




// Middlewires
app.use(Express.json());
app.use(Cors());


//Environment Data
let DBString = process.env.URI

// DataBase Integration
Mongoose.connect(DBString)
.then(()=>{
    console.log("DB Connected!");
})
.catch((e)=>{
    console.log("DB Connection Failled!");
})

// Route Controllers
// Adding Bus Data By Bus Owners
app.post("/addbus",AddBus);
app.post("/searchbus",SearchBus);

app.listen(8000,()=>{
    console.log("http://localhost:8000");
})
