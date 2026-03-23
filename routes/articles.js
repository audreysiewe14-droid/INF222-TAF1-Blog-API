
const express=require('express');
const router=express.Router();
const controller=require('../controllers/articles');

router.get('/search',controller.search);
router.get('/',controller.getAll);
router.get('/:id',controller.getById);
router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/',controller.delete);

module.exports=router;
