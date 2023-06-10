const express=require('express');
const mongoose=require('./config/mongoose');
const App=express();

App.use(express.json());
App.use('/',require('./routes'));

App.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is up and running");
});
