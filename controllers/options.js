const Options=require('../models/options');
const Question=require('../models/question');
module.exports.destroy=async(req,res)=>{
    try{
    const option=await Options.findByIdAndDelete(req.params.id);
    if(option){
    const questionID=option.questionId;

    await Question.findOneAndUpdate(questionID,{$pull:{option:req.params.id}});

    return res.status(200).json("deleted");
    }
    return res.status(404).json("no option found");

    }catch(err){
        console.log(err);
        return res.status(500).json("Internal Server Error");
    }
    
}

module.exports.addvote=async(req,res)=>{
    try{
        const option=await Options.findByIdAndUpdate(req.params.id,{$inc:{votes:1}},{new:true});
        return res.status(200).json(option);

    }catch(err){
        console.log(err);
        return res.status(500).json("Internal Server Error");
    }
   
}