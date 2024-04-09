const express = require('express'); 
const router = express.Router(); 
const skillsCtrl = require('../controllers/skills')


// GET: /skills
router.get('/', skillsCtrl.index); 

// GET: /skills/:id 
router.get('/:id', skillsCtrl.show); 




module.exports = router; 