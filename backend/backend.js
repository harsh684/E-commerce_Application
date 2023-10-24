const express= require('express')
const mongoose = require('mongoose')
const cors= require("cors")
const UserModel=require('./models/User')

const app= express()
//transfer the data from frontend to backend in json format
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ["POST", "GET"],
    credentials: true
}));

mongoose.connect(`mongodb+srv://Harsh:Harsh123@cluster0.gkekzpj.mongodb.net/users?retryWrites=true&w=majority`);
app.get("/",(req,res)=>{
    res.json("Hello");
})
app.post("/login",(req,res)=>{
    const {email, password}=req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("Invalid Id or Need to Sign Up")
        }
    })
})

app.post('/signup',(req,res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err=>res.json(err))
})

app.listen(5000,()=>{
    console.log("server is running")
})
