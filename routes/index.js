const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.status(200).json("hello");
})
router.use("/questions",require('./questions'));
router.use("/options",require('./options'));

module.exports=router;