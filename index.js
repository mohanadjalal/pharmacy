const express  = require("express")
const cors = require("cors");
const { json } = require("express/lib/response");

const models = require("./models");

const app = express(); 


app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({extended:true})); 


models.sequelize.sync({ force: false }).then(function () {
    console.log("Database Configured");
  })


app.get('/' , (req,res)=>{
    return res.json({message:"welcome to our pharmacy app"});
})


const port = process.env.PORT || 5000 ; 

app.listen(port , ()=>{
    console.log(`server is listening over port ${port}`);
})