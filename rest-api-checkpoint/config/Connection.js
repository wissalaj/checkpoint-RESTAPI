const mongoose = require('mongoose')
const mongoUrl='mongodb+srv://wissal111:wissal111@userlist.jlv5w.mongodb.net/<dbname>?retryWrites=true&w=majority'

const ConnectDB = ()=>mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true  }, (err) =>{
    if(err){
        throw err
    }
    console.log('Database is connecting...')
})
module.exports=ConnectDB