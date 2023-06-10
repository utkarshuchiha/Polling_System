const Question =require( "../models/question");
const Options=require("../models/options");
const URL="http://localhost:8000/options";
module.exports.create=async(req,res)=>{
   const question=await Question.create(req.body);
    return res.status(200).json(question);
}

module.exports.createOption=async(req,res)=>{
    try{
        const question=await Question.findById(req.params.id);
        if(question){
        const option=await Options.create({
            title:req.body.title,
            questionId:req.params.id,
        });
       
        const linktovote=`${URL}/${option._id}/add_vote`;
       
        
        option.link_to_vote=linktovote;
        option.save();

        question.option.push(option);
        question.save();


        return res.status(200).json(option);

    }
    else{
        return res.status(404).json("no question present");
    }

    }catch(err){
        console.log(err);
        return res.status(500).json(err);

    }

   

}

module.exports.allquestion=async(req,res)=>{
    try{
        const question=await Question.findById(req.params.id).populate('option');
        if(question){
            return res.status(200).json(question);
        }
        return res.status(404).json("no question present");

    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
    
   
}

module.exports.destroy=async(req,res)=>{
    try{
        const question=await Question.findByIdAndDelete(req.params.id);
        await Options.deleteMany({questionId:req.params.id});

        return res.status(200).json("deleted");
        
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}