const mongoose=require('mongoose');
const optionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required:true
    },
    votes:{
        type:Number,
        default:0
    },
    link_to_vote:{
        type:String
    }
});

const Option=mongoose.model('Option',optionSchema);
module.exports=Option;