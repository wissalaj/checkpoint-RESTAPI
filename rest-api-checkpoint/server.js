const express = require('express')
const ConnectDB = require('./config/Connection')
const User = require('./models/User')
//require("dotenv").config();
//config  connection 
ConnectDB()
const app = express()
//init middleware to parse the body
app.use(express.json())
// body 
//add new user 
app.post('/new', (req ,res)=>{
    const{name, email, password} = req.body
    let newUser = new User({name, email, password})
    newUser.save()
    .then(()=> res.json({msg:'User Created'}))
    .catch(err => console.log(err.message))
})
// get all user
app.get('/getalluser', (req, res) => {
    User.find()
    .then ( User=> res.json(User))
    .catch(err => console.error(err.message))
})
// update user
app.put('/edituser/:id',(req,res) =>{
    let newData = req.body
    User.findByIdAndUpdate(req.params.id, newData,(err,data) =>{
       if (err) throw err
       else res.json({msg:"user updated"})
    })
})
//delete user 
app.delete("/deleteuser/:id" , (req ,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg : 'User deleted'}))
    .catch(err => console.error(err.message))
})
//conf port 
app.listen(5000 , (err)=>{
    if (err){
        throw err
    }
    console.log('server is running on port 5000 ...')
})