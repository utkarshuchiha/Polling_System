const express=require('express');
const router=express.Router();
const questionController=require('../controllers/questions')

router.post('/create',questionController.create);
router.post('/:id/options/create',questionController.createOption);
router.get('/:id',questionController.allquestion);
router.delete('/:id/delete',questionController.destroy);

module.exports=router;