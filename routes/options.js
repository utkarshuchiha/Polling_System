const express=require('express');
const router=express.Router();
const optionController=require('../controllers/options')

router.delete('/:id/delete',optionController.destroy);
router.post('/:id/add_vote',optionController.addvote);


module.exports=router;